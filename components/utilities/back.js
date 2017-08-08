
import 		React 					from 'react';
import { 	TouchableOpacity 	,
			Text 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		style 					from '../../styles/header';
import 		theme 					from '../../configuration/theme';

export default class Back extends React.Component {

	render () {

		return (

			<TouchableOpacity 
				style  	= { style.default.back.control 	}
				onPress = { this.props.press 			}
			>

				<Ionicons
					name 	= { 'ios-arrow-back-outline' 	}
					size 	= { 18 							}
					color 	= { theme.primaries [ 1 		]}
				/>

				<Text style = { style.default.back.text }>
					{ this.props.value }
				</Text>
				
			</TouchableOpacity>
		);

	}
};
