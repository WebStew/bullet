
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	FlatList 			,
			Linking 			,
			Platform 			,
			Share 				,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import {	timeFormat 			} 	from 'd3-time-format';
import 		Error 					from '../components/errors/ajax';
import 		Action 					from '../components/utilities/header-action';
import 		Back 					from '../components/utilities/back';
import 		Loader 					from '../components/utilities/loader';
import 		Header 					from '../components/news/header';
import 		actions 				from '../actions/news';
import 		style 					from '../styles/news';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		analytics 				from '../utilities/analytics';
import 		application 			from '../configuration/application';

export default connect (

	state => ({
		language 	: state.language 	,
		news 		: state.news 		,
		theme 		: state.theme
	})

) ( class News extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		const language 	= screenProps.language 	,
				theme 	= screenProps.theme 	;

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
			headerTitle : <Header 		/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						color 	= { focused ? theme.disabled : theme.secondary 	}
						name 	= 'ios-paper-outline'
						size 	= { 32 											}
					/>
				);
			} ,
			title 		: language.screens.news.title
		}
	};

	constructor ( props ) {
		super 	( props );

		this.refresh 	= this.refresh.bind 	( this 			);
		this.row 		= this.row.bind 		( this 			);
		this.separator 	= this.separator.bind 	( this 			);
		this.format 	= timeFormat 			( '%d, %B, %Y' 	);
	}

	componentWillMount () {

		this.props.dispatch ( actions.get ());
	} 

	row ({ 
		index , 
		item 
	}) {

		const 	date 		= Date.parse ( item.pubdate ) 	,
				language 	= this.props.language 			,
				theme 		= this.props.theme 				,
				appearance 	= style ( theme ) 				,
				stripe 		= index % 2 === 0 ? theme.base : theme.primary;

		return (
			<TouchableOpacity 
				style 	= {{
					...appearance.view ,
					...{
						backgroundColor : stripe
					}
				}}
				onPress = {() => {
				
					analytics.event ( 'news' , 'open' , item.link 	);
					Linking.openURL ( item.link 					);
				}}
			>
				<Text 	style = { appearance.title 			}>{ item.title 				}</Text>
				<Text 	style = { appearance.date 			}>{ this.format ( date 		)}</Text>
				<Text 	style = { appearance.description 	}>{ item.description 		}</Text>
				<View 	style = { appearance.icon 			}>
				<Text 	style = { appearance.link 			}>{ language.actions.more 	}</Text>
					<Ionicons
						color 	= { theme.secondary 			}
						name 	= 'ios-arrow-forward-outline'
						size 	= { 18 							}
					/>
				</View>
			</TouchableOpacity>
		);
	}

	separator ( section , row , highlighted ) {

		const theme = this.props.theme;

		return (
			<View
				key 	= { section + '-' + row }
				style 	= { seperator 	( theme )}
			/>
		);
	}

	refresh () {
	
		analytics.event ( 
			'news' 		, 
			'refresh' 	, 
			'get' 		, 
			'user' 	
		);
		this.props.dispatch ( actions.get ());
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		;
				// appearance 	= style ( theme ) 		;

		if ( this.props.news.loading ) {
			
			return (
				<View  style 	= { scenery.body 			}>
					<Loader 
						loading = { this.props.news.loading }
						size 	= 'large' 
						theme 	= { theme 					}
					/>
				</View>
			);
		}

		if ( this.props.news.error ) {

			console.log ( this.props.news.error );

			analytics.screen 	( 'news:500' 				);
			return 				(
				<Error 
					error 		= { this.props.news.error 	}
					language 	= { language 				}
					press 		= { this.refresh 			}
					theme 		= { theme 					}
					text 		= { language.errors.ajax 	}
				/>
			);
		}

		return (
			<View style = { scenery.body }>
				<FlatList
					theme 					= { theme 							}
					data 					= { this.props.news.items 			}
					ItemSeparatorComponent 	= { this.separator 					}
					keyExtractor 			= {( item , index ) => index 		}
					refreshing 				= { this.props.news.loading 		}
					renderItem 				= { this.row 						}
				/>
			</View>
		);
	}
});
