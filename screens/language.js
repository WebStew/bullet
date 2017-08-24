
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

) ( class Translations extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	, 
				theme 		= screenProps.theme 	;

		return {
			title 		: strings.capitalise ( language.screens.translations.title ) ,
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	constructor ( props ) {
		super 	( props );

		this.translations 	= this.translations.bind ( this );
	}

	translations () {

		const language = this.props.language;

		analytics.event ( 'language' , 'send' , 'email' );
		Linking.openURL ( 
			'mailto://' + application.email + '?subject=Translation Request&body=' + JSON.stringify ( 
				language 	, 
				null 		,
				'\t' 
			));
	}

	render () {

		const 	language 	= this.props.language ,
				theme 		= this.props.theme;
				
		return 				(
			<ScrollView style 	= { scene ( theme ).body 									}>
				<Heading 
					theme 	= { theme 														}
					title 	= { strings.capitalise ( language.screens.translations.title 	)}
					type 	= { 1 															}
				/>
				<View 	style 	= { style ( theme ).body 			}>
					<Text style = { style ( theme ).text 			}>
						{ language.screens.translations.body 		}
					</Text>
					<Button
						press = { this.translations 					}
						theme = { theme 								}
						value = { language.screens.translations.action 	}
					/>
				</View>
			</ScrollView>
		);
	}
});
