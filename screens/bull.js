
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	Platform 		,
			ScrollView 		,
			Share 			,
			Text 			,
			View 			} 	from 'react-native';
import { 	Ionicons 		} 	from '@expo/vector-icons';
import 		Error 				from '../components/errors/ajax';
import 		Action 				from '../components/utilities/header-action';
import 		Loader 				from '../components/utilities/loader';
import 		Header 				from '../components/bull/header';
import 		Overview 			from '../components/bull/overview';
import 		NotFound 			from '../components/bull/404';
import 		Refresh 			from '../components/bull/refresh';
import 		actions 			from '../actions/currencies';
import 		scene 				from '../styles/scene';
import 		api 				from '../api/currencies';
import 		analytics 			from '../utilities/analytics';
import 		application 		from '../configuration/application';

export default connect (

	state => ({
		bull 		: state.bull 		,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Bull extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			headerLeft 	: <Action 
				icon 	= 'ios-share-outline'
				press 	= {() => {

					const 	platform 	= Platform.OS ,
							link 		= platform === 'ios' ? application.stores.apple : application.stores.google;

					analytics.event ( 'cryptobullography' , 'share' , 'open' , platform );
					Share.share 	(
						{
							message 	: language.screens.share.summary 	,
							title 		: language.screens.share.title 		,
							url 		: link
						} , 
						{
							dialogTitle : language.screens.share.title 		,
							tintColor 	: theme.chrome
						}
					)
					.then 	(() 		=> analytics.event ( 'cryptobullography' , 'share' , 'success' 	, platform 	))
					.catch 	(( error ) 	=> analytics.event ( 'cryptobullography' , 'share' , 'error' 	, platform 	));
				}}
				value 	= { language.actions.share }
			/> ,
			headerRight : <Refresh 	/> ,
			headerTitle : <Header 	/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-trending-up-outline'
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);
			} ,
			title 		: language.screens.bull.title
		};
	};

	constructor ( props ) {
		super 	( props );
		
		this.refresh = this.refresh.bind ( this );
		this.refresh ();
	}

	refresh () {

		if ( this.props.bull.competitors > api.limit ) {
			
			analytics.event 	( 'bull' , 'load' , 'stream' , 'application' );
			this.props.dispatch ( actions.stream 							());
		}
		else {

			analytics.event 	( 'bull' , 'load' , 'get' , 'application' 	);
			this.props.dispatch ( actions.get 								());
		}
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		if ( this.props.bull.loading ) {

			return (
				<View  style 	= { scene ( theme ).body 	}>
					<Loader 
						loading = { this.props.bull.loading }
						size 	= 'large' 
						theme 	= { theme 					}
					/>
				</View>
			);
		}

		if ( this.props.bull.error ) {

			analytics.screen 	( 'bull:500' 				);
			return 				(
				<Error 
					error 		= { this.props.bull.error 	}
					language 	= { language 				}
					press 		= { this.refresh 			}
					text 		= { language.errors.ajax 	}
					theme 		= { theme 					}
				/>
			);

		}

		if ( this.props.bull.rating === 0 ) {

			analytics.screen 	( 'bull:404' 		);
			return 				(
				<NotFound 
					bull 		= { this.props.bull }
					language 	= { language 		}
					theme 		= { theme 			}
				/>
			);
		}

		return 				(
			<ScrollView style = { scene ( theme ).body 	}>
				<Overview 
					bull 		= { this.props.bull 	}
					language 	= { language 			}
					theme 		= { theme 				}
				/>
			</ScrollView>
		);

	}
});
