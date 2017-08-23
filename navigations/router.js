
import 		React 				from 'react';
import { 	StackNavigator 	,
			TabNavigator 	} 	from 'react-navigation';
import 		TabBar 				from '../components/navigations/tabbar-bottom';
import 		Bull 				from '../screens/bull';
import 		Currencies 			from '../screens/currencies';
import 		Detail				from '../screens/detail';
import 		Exchanges 			from '../screens/exchanges';
import 		Language 			from '../screens/language';
import 		Languages 			from '../screens/languages';
import 		Settings 			from '../screens/settings';
import 		Theme 				from '../screens/theme';
import 		Themes 				from '../screens/themes';
import 		Donate 				from '../screens/donate';
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

		detail 		: {
			screen 	: Detail
		} ,

		donate 		: {
			screen 	: Donate
		} ,

		language 	: {
			screen 	: Language
		} ,

		theme 		: {
			screen 	: Theme
		} ,

		themes 		: {
			screen 	: Themes
		} ,

		languages 	: {
			screen 		: Languages
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

