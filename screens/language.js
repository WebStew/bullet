
import 		React 				from 'react';
import { 	ScrollView 		,
			Text 			,
			View 			} 	from 'react-native';
import 		Back 				from '../components/utilities/back';
//import { 	Ionicons 		} 	from '@expo/vector-icons';
import 		scene 				from '../styles/scene';
import 		strings 			from '../properties/strings';
import 		theme 				from '../configuration/theme';
import 		style 				from '../styles/list-control';

export default class Language extends React.Component {

	static navigationOptions = ({ navigation }) => ({

		title : strings.screens.language.title ,
		
		headerLeft 		: <Back 
			press 		= {() => navigation.goBack 	()} 
			value 		= { strings.actions.return 	}
		/>
	});

	render () {

		return (
			<ScrollView style 	= { scene.default 	}>
				<Text style = { style.text 		}>
					Language page
				</Text>
			</ScrollView>
		);

	}
};
