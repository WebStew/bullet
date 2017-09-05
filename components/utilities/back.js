
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TouchableOpacity 	,
			Text 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		style 					from '../../styles/header';

export default connect (

	state => ({
		theme 	: state.theme
	})

) ( class Back extends React.Component {

	render () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		return (
			<TouchableOpacity 
				style  	= { appearance.back.control }
				onPress = { this.props.press 		}
			>
				<Ionicons
					name 	= { 'ios-arrow-back-outline' 	}
					size 	= { 18 							}
					color 	= { theme.secondary 			}
				/>
				<Text style = { appearance.back.text 	}>
					{ this.props.value 					}
				</Text>
			</TouchableOpacity>
		);

	}
});
