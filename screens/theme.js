
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
		
		// headerLeft 		: <Back 
		// 	press 		= {() => navigation.goBack 	()} 
		// 	value 		= { strings.actions.return 	}
		// />
	});

	themes () {

		return Object.keys ( themes ).map (( theme , index ) => {

			const icon = themes [ theme ] .id === this.props.theme.id ? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline';

			return (
				<TouchableOpacity 
					key 	= { index 												}
					onPress = {() => this.props.dispatch ( actions.save ( themes[ theme ].id 	))}
					style 	= {{
						...style.control ,
						...{
							backgroundColor : themes[ theme ].chrome ,
							borderColor 	: themes[ theme ].border
						}
					}}
				>
					<Text style = {{
						...style.text ,
						...{
							color : themes [ theme ].secondary
						}
					}}>
						{ themes[ theme ].name }
					</Text>
					<Ionicons
						name 	= { icon 						}
						size 	= { 18 							}
						color 	= { themes[ theme ].secondary 	}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.screenProps.theme
//{ this.themes ()}
		return (
			<ScrollView style 	= { scene ( theme ).body 	}>
				<Text>TEST</Text>				
			</ScrollView>
		);

	}
});
