
import 		React 					from 'react';
import { 	Linking 			,
			ScrollView 			,
			TouchableOpacity 	,
			Text 				,
			View 				} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		application 			from '../configuration/application';
import 		Back 					from '../components/utilities/back';
import 		Button 					from '../components/utilities/button';
import 		Heading 				from '../components/utilities/headings';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/help';
import 		strings					from '../utilities/string';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Themes extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language , 
				theme 		= screenProps.theme 	;

		return {
			title 		: strings.capitalise ( language.screens.themes.title ) ,
			headerLeft 	: <Back 
				press 	= {() => {

					analytics.event 	( 'theme' , 'navigate' , 'back' );
					navigation.goBack 	();
				}}
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	constructor ( props ) {
		super 	( props );

		this.themes 		= this.themes.bind 			( this );
	}

	themes () {

		const theme = this.props.theme;

		analytics.event 	( 'theme' , 'send' , 'email' );
		Linking.openURL ( 
			'mailto://' + application.email + '?subject=Theme Request&body=' + JSON.stringify ( 
				theme 	, 
				null 	, 
				'\t' 
			));
	}

	render () {

		const 	language 	= this.props.language ,
				theme 		= this.props.theme;

		analytics.screen 	( 'theme:200' );
		return 				(
			<ScrollView style 	= { scene ( theme ).body 							}>
				<Heading 
					theme 	= { theme 												}
					title 	= { strings.capitalise ( language.screens.themes.title 	)}
					type 	= { 1 													}
				/>
				<View 	style 	= { style ( theme ).body 		}>
					<Text style = { style ( theme ).text 		}>
						{ language.screens.themes.body 			}
					</Text>					
					<Button
						press = { this.themes 						}
						theme = { theme 							}
						value = { language.screens.themes.action 	}
					/>
				</View>
			</ScrollView>
		);
	}
});
