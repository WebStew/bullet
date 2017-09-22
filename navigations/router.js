
import 		React 				from 'react';
import { 	StackNavigator 	,
			TabNavigator 	} 	from 'react-navigation';
import 		TabBar 				from '../components/navigations/tabbar-bottom';
import 		Bull 				from '../screens/bull';
import 		Converter 			from '../screens/converter';
import 		Currency 			from '../screens/currency';
import 		Currencies 			from '../screens/currencies';
import 		Detail				from '../screens/detail';
import 		Exchanges 			from '../screens/exchanges';
import 		Language 			from '../screens/language';
import 		Languages 			from '../screens/languages';
import 		News 				from '../screens/news';
import 		Portfolio 			from '../screens/portfolio';
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

		portfolio 	: {
			screen 	: Portfolio
		} ,
		
		news 		: {
			screen 	: News
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

		currency 	: {
			screen 	: Currency
		} ,

		detail 		: {
			screen 	: Detail
		} ,

		// donate 		: {
		// 	screen 	: Donate
		// } ,

		exchanges 	: {
			screen 	: Exchanges
		} ,

		language 	: {
			screen 	: Language
		} ,

		converter 	: {
			screen 	: Converter
		} ,

		theme 		: {
			screen 	: Theme
		} ,

		themes 		: {
			screen 	: Themes
		} ,

		languages 	: {
			screen 	: Languages
		}
	} ,

	{
		navigationOptions : ({ screenProps }) => {

			const 	theme 		= screenProps.theme ,
					appearance 	= header ( theme ) 	;

			return {
				headerStyle 		: appearance.header ,
				headerTitleStyle 	: appearance.title
			};
		}
	}
);

