
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	Ionicons 		} 	from '@expo/vector-icons';
import { 	StackNavigator 	,
			TabNavigator 	, 
			TabBarBottom 	} 	from 'react-navigation';
import { 	Image 			} 	from 'react-native';
import 		Bull 				from '../screens/bull';
// import 		Currencies 				from '../screens/currencies';
// import 		Detail					from '../screens/detail';
// import 		Exchanges 				from '../screens/exchanges';
//import 		Language 				from '../screens/language';
import 		Settings 			from '../screens/settings';
import 		Theme 				from '../screens/theme';
import 		tabbar 				from '../styles/tabbar';
import 		header 				from '../styles/header';
//import 		theme 					from '../configuration/palette';

const Root = TabNavigator (

	{
		bull 		: {
			screen 	: Bull
		} ,

		// currencies 	: {
		// 	screen 	: Currencies
		// } ,

		// exchanges 	: {
		// 	screen 	: Exchanges
		// } ,

		settings 	: {
			screen 	: Settings
		}
	} ,

	{
		animationEnabled 	: true ,

		navigationOptions 	: function ({ navigation , screenProps }) {

			const theme = screenProps.theme;

			return {

				// Set the tab bar icon
				tabBarIcon : ({ focused }) => {

					const { routeName } = navigation.state;
					let 	name;

					switch ( routeName ) {

						case 'bull':
							name = 'ios-trending-up-outline';
							break;

						case 'currencies':
							name = 'ios-stats-outline';
							break;

						case 'exchanges':
							name = 'ios-basket-outline';
							break;

						case 'settings':
							name = 'ios-settings-outline';
							break;
					}

					return (
						<Ionicons
							name 	= { name 										}
							size 	= { 32 											}
							color 	= { focused ? theme.disabled : theme.secondary 	}
						/>
					);
				}
			}
		} ,

		swipeEnabled 		: true ,

		// Put tab bar on bottom of screen on both platforms
		tabBarComponent 	: TabBarBottom 	,
		tabBarPosition 		: 'bottom'		,

		// Don't show the labels
		tabBarOptions 		: {
			showLabel 		: false ,
			//...tabbar ( this.props.theme )

		}
	}
);

export default StackNavigator (
	{

		Root : {
			screen : Root
		} ,

		// Detail : {
		// 	screen : Detail
		// } ,

		// Language : {
		// 	screen : Language
		// } ,

		Theme : {
			screen : Theme
		}
	} ,

	{
		navigationOptions : ({ screenProps }) => {

			const theme = screenProps.theme;

			return {
				headerBackTitleStyle 	: header ( theme ).back 	,
				headerStyle 			: header ( theme ).header 	,
				headerTitleStyle 		: header ( theme ).title
			};
		}
	}
);

