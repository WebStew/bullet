
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		actions 				from '../actions/theme';
import 		strings 				from '../properties/strings';
import 		themes 					from '../properties/themes';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';

export default connect (

	state => ({
		theme : state.theme
	})

) ( class Theme extends React.Component {

	static navigationOptions = ({ navigation }) => ({

		title : strings.screens.theme.title ,
		
		headerLeft 		: <Back 
			press 		= {() => navigation.goBack 	()} 
			value 		= { strings.actions.return 	}
		/>
	});

	themes () {

		return themes.map (( theme , index ) => {

			const icon = theme.id === this.props.theme.id ? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline';

			return (
				<TouchableOpacity 
					key 	= { index 								}
					onPress = {() => this.props.dispatch ( actions.set ( theme.id ))}
					style 	= {{
						...style.control ,
						...{
							backgroundColor : theme.chrome ,
							borderColor 	: theme.border
						}
					}}
				>
					<Text style = {{
						...style.text ,
						...{
							color : theme.secondary
						}
					}}>
						{ theme.name }
					</Text>
					<Ionicons
						name 	= { icon 			}
						size 	= { 18 				}
						color 	= { theme.secondary }
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
});
