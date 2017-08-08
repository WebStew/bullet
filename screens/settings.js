
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		scene 					from '../styles/scene';
import 		strings 				from '../properties/strings';
import 		theme 					from '../configuration/theme';
import 		style 					from '../styles/list-control';

export default class Settings extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title : strings.screens.settings.title
	});

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

		const 	navigate = this.props.navigation.navigate;

		return this.settings ().map (( setting , index ) => {

			const background = index % 2 === 0 ? theme.primary : theme.base;

			return (
				<TouchableOpacity 
					key 	= { index 						}
					onPress = {() => navigate ( setting.url )}
					style 	= {{ 
						...style.control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { style.text 				}>
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

		return (
			<ScrollView style 	= { scene.default 	}>
				{ this.contents ()}
			</ScrollView>
		);

	}
};
