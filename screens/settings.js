
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	Linking 			,
			Platform 			,
			ScrollView 			,
			Share 				,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Action 					from '../components/utilities/header-action';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';
import 		application 			from '../configuration/application';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Settings extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			headerLeft 	: <Action 
				icon 	= 'ios-share-outline'
				press 	= {() => {

					const 	platform 	= Platform.OS;

					analytics.event ( 'cryptobullography' , 'share' , 'open' , platform );
					Share.share 	(
						{
							message 	: language.screens.share.summary 	,
							title 		: language.screens.share.title 		,
							url 		: application.store ()
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
			title 		: language.screens.settings.title ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= { 'ios-settings-outline' 						}
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);

			}
		};
	};

	settings () {

		const language = this.props.language;

		return [
			{
				name 	: language.screens.exchanges.title 		,
				url 	: 'exchanges'
			} ,
			{
				name 	: language.screens.converter.title 		,
				url 	: 'converter'
			} ,
			{
				name 	: language.screens.currency.title 		,
				url 	: 'currency'
			} ,

			{
				name 	: language.screens.theme.title 			,
				url 	: 'themes'
			} ,
			
			{
				name 	: language.screens.language.title 		,
				url 	: 'languages'
			} ,
			
			{
				name 	: language.screens.themes.title  		,
				url 	: 'theme'
			} ,
			
			{
				name 	: language.screens.translations.title  	,
				url 	: 'language'
			} ,
			
			{
				name 	: language.screens.donate.title  		,
				url 	: 'donate'
			}
		];
	}

	contents () {

		const 	navigate 	= this.props.navigation.navigate 	,
				theme 		= this.props.theme 					,
				appearance 	= style ( theme ) 					;

		return this.settings ().map (( setting , index ) => {

			const background = index % 2 === 0 ? theme.base : theme.primary;

			return (
				<TouchableOpacity 
					key 	= { index 						}
					onPress = {() => navigate ( setting.url )}
					style 	= {{ 
						...appearance.control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { appearance.text 			}>
						{ setting.name }
					</Text>
					<Ionicons
						name 	= { 'ios-arrow-forward-outline' }
						size 	= { 18 							}
						color 	= { theme.secondary 			}
					/>
				</TouchableOpacity>
			);
		});

	}

	render () {

		const 	theme 		= this.props.theme 	,
				scenery 	= scene ( theme ) 	,
				appearance 	= style ( theme ) 	;

		return 	(
			<ScrollView style = { scenery.body }>
				<TouchableOpacity 
					onPress = {() => Linking.openURL ( application.cryptocoinminer ())}
					style 	= {{ 
						...appearance.control ,
						...{
							backgroundColor : theme.primary
						}
					}}
				>
					<Text style = { appearance.text 			}>
						Crypto Coin Miner
					</Text>
					<Ionicons
						name 	= { 'ios-arrow-forward-outline' }
						size 	= { 18 							}
						color 	= { theme.secondary 			}
					/>
				</TouchableOpacity>
				{ this.contents ()}
			</ScrollView>
		);

	}
});
