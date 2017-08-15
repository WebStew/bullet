
import 		React 					from 'react';
import { 	Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		style 					from '../../styles/button';

export default class Button extends React.Component {

	icon () {
		return 'ios-share-outline';
	}

	render () {

		const theme = this.props.theme;

		return (
			<TouchableOpacity 
				accessibilityLabel 	= { this.props.value 				}
				onPress 			= { this.props.press 				}>
				<View 		style 	= { style ( theme ).primary.view 	}>
					<Text 	style 	= { style ( theme ).primary.text 	}>
						{ this.props.value.toUpperCase 					()}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
};
