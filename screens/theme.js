
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import 		Back 					from '../components/utilities/back';
import { 	Ionicons 			} 	from '@expo/vector-icons';
//import 		theme 					from '../configuration/theme';
import 		strings 				from '../properties/strings';
import 		themes 					from '../properties/themes';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';
import 		color 					from '../utilities/colors';

export default class Theme extends React.Component {

	static navigationOptions = ({ navigation }) => ({

		title : strings.screens.theme.title ,
		
		headerLeft 		: <Back 
			press 		= {() => navigation.goBack 	()} 
			value 		= { strings.actions.return 	}
		/>
	});

	constructor ( props ) {
		super 	( props );

		//this.themes = this.set.bind ( this );
	}

	themes () {

		return themes.map (( theme , index ) => {

			return (
				<TouchableOpacity 
					key 	= { index 								}
					onPress = {() => console.log ( theme.id )}
					style 	= {{
						...style.control ,
						...{
							backgroundColor : theme.primaries [ 0 ] ,
							borderColor 	: color.shade ( theme.primaries [ 0 ] , -0.25 )
						}
					}}
				>
					<Text style = {{
						...style.text ,
						...{
							color : theme.primaries [ 1 ]
						}
					}}>
						{ theme.name }
					</Text>
					<Ionicons
						name 	= { 'ios-radio-button-off-outline' 	}
						size 	= { 18 								}
						color 	= { theme.primaries 			[ 1 ]}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		return (
			<ScrollView style 	= { scene.default 	}>
				{ this.themes ()}
			</ScrollView>
		);

	}
};
