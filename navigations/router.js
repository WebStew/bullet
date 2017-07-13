
import 		React 					from 'react';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import { 	StackNavigator 	,
			TabNavigator 	, 
			TabBarBottom 		} 	from 'react-navigation';
import { 	Image 				} 	from 'react-native';
import 		Bull 					from '../screens/bull';
import 		Currencies 				from '../screens/currencies';
import 		Detail					from '../screens/detail';
import 		style 					from '../styles/tabbar';
import 		banner 					from '../styles/header';
import 		theme 					from '../styles/theme';

const Root = TabNavigator (

	{
		bull 		: {
			screen 	: Bull
		} ,
		currencies 	: {
			screen 	: Currencies
		}
	} ,

	{
		animationEnabled 	: true ,

		navigationOptions 	: function ({ navigation }) {

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
					}

					return (
						<Ionicons
							name 	= { name 												}
							size 	= { 32 													}
							color 	= { focused ? theme.accents [ 2 ] : theme.primaries [ 1 ]}
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
			...style

		}
	}
);

export default StackNavigator (
	{

		Root : {
			screen : Root
		} ,

		Detail : {
			screen : Detail
		}
	} ,

	{
		navigationOptions : () => ({
			headerBackTitleStyle 	: banner.default.back 	,
			headerStyle 			: banner.default.header ,
			headerTitleStyle 		: banner.default.title
		})
	}
);

