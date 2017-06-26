
/**
 * @flow
 */
import 		React 				from 'react';
import { 	FontAwesome 	} 	from '@expo/vector-icons';
import { 	TabNavigator 	, 
			TabBarBottom 	} 	from 'react-navigation';
import 		home 				from '../screens/home';
import 		links 				from '../screens/links';
import 		settings 			from '../screens/settings';
import 		theme 				from '../styles/theme';

export default TabNavigator (
	{
		home 		: {
			screen 	: home
		} ,
		links 		: {
			screen 	: links
		} ,
		settings 	: {
			screen 	: settings
		}
	} ,
	{
		navigationOptions : ({ navigation }) => ({

			// Set the tab bar icon
			tabBarIcon : ({ focused }) => {

				const { routeName } = navigation.state;
				let 	name;

				switch ( routeName ) {

					case 'home':
						name = 'home';
						break;

					case 'links':
						name = 'book';
						break;

					case 'settings':
						name = 'cog';
						break;

				}

				return (
					<FontAwesome
						name 	= { name 												}
						size 	= { 32 													}
						color 	= { focused ? theme.primaries [ 1 ] : theme.accents [ 0 ]}
					/>
				);
			}
		}) ,

		// Put tab bar on bottom of screen on both platforms
		tabBarComponent : TabBarBottom 	,
		tabBarPosition 	: 'bottom'		,

		// Disable animation so that iOS/Android have same behaviors
		animationEnabled : false ,

		// Don't show the labels
		tabBarOptions : {
			showLabel : false
		}
	}
);
