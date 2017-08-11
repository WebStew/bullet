
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		scene 					from '../styles/scene';
import 		strings 				from '../properties/strings';
import 		style 					from '../styles/list-control';

export default connect (

	state => ({
		theme 	: state.theme
	})

) ( class Settings extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		const theme = screenProps.theme;

		return {

			title 		: strings.screens.settings.title ,
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

		return [
			{
				name 	: strings.screens.theme.title 		,
				url 	: 'Theme'
			} ,
			
			{
				name 	: strings.screens.language.title 	,
				url 	: 'Language'
			}
		];
	}

	contents () {

		const 	navigate 	= this.props.navigation.navigate 	,
				theme 		= this.props.theme 					;

		return this.settings ().map (( setting , index ) => {

			const background = index % 2 === 0 ? theme.primary : theme.base;

			return (
				<TouchableOpacity 
					key 	= { index 						}
					onPress = {() => navigate ( setting.url )}
					style 	= {{ 
						...style ( theme ).control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { style ( theme ).text 				}>
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

		const theme = this.props.theme;

		return (
			<ScrollView style = { scene ( theme ).body }>
				{ this.contents ()}
			</ScrollView>
		);

	}
});
