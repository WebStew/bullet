
import 		React 				from 'react';
import { 	Ionicons 		} 	from '@expo/vector-icons';
import { 	TabNavigator 	, 
			TabBarBottom 	} 	from 'react-navigation';
import 		Bull 				from '../screens/bull';
import 		Currencies 			from '../screens/currencies';
import 		style 				from '../styles/tabbar';
import 		theme 				from '../styles/theme';

export default TabNavigator (

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
