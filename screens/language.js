
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	ScrollView 		,
			Text 			,
			View 			} 	from 'react-native';
import 		Back 				from '../components/utilities/back';
import 		scene 				from '../styles/scene';
import 		style 				from '../styles/language';
import 		strings 			from '../properties/strings';

export default connect (

	state => ({
		theme 	: state.theme
	})

) ( class Language extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const theme = screenProps.theme;

		return {
			title 		: strings.screens.language.title ,
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { strings.actions.return 	}
			/>
		};
	};

	render () {

		const theme = this.props.theme;

		return (
			<ScrollView style = { scene ( theme ).body 	}>
				<Text 	style = { style ( theme ).body 	}>
					{ strings.screens.language.coming 	}
				</Text>
			</ScrollView>
		);

	}
});
