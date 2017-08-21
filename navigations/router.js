
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	Ionicons 		} 	from '@expo/vector-icons';
import { 	StackNavigator 	,
			TabNavigator 	} 	from 'react-navigation';
import 		TabBar 				from '../components/navigations/tabbar-bottom';
import 		Bull 				from '../screens/bull';
import 		Currencies 			from '../screens/currencies';
import 		Detail				from '../screens/detail';
import 		Exchanges 			from '../screens/exchanges';
import 		Language 			from '../screens/language';
import 		Translations 		from '../screens/language-send';
import 		Settings 			from '../screens/settings';
import 		Theme 				from '../screens/theme';
import 		Themes 				from '../screens/theme-send';
import 		Donate 				from '../screens/donate';
import 		tabbar 				from '../styles/tabbar';
import 		header 				from '../styles/header';

const Root = TabNavigator (

	{
		bull 		: {
			screen 	: Bull
		} ,

		currencies 	: {
			screen 	: Currencies
		} ,

		exchanges 	: {
			screen 	: Exchanges
		} ,

		settings 	: {
			screen 	: Settings
		}
	} ,

	{
		animationEnabled 	: true 		,
		swipeEnabled 		: true 		,
		tabBarComponent 	: TabBar 	,
		tabBarPosition 		: 'bottom'	,
		tabBarOptions 		: {
			showLabel 		: false
		}
	}
);

export default StackNavigator ({
		Root 		: {
			screen 	: Root
		} ,

		Detail 		: {
			screen 	: Detail
		} ,

		Donate 		: {
			screen 	: Donate
		} ,

		Language 	: {
			screen 	: Language
		} ,

		Theme 		: {
			screen 	: Theme
		} ,

		Themes 		: {
			screen 	: Themes
		} ,

		Translations 	: {
			screen 		: Translations
		}
	} ,

	{
		navigationOptions : ({ screenProps }) => {

			const theme = screenProps.theme;

			return {
				headerStyle 			: header ( theme ).header 	,
				headerTitleStyle 		: header ( theme ).title
			};
		}
	}
);

