
import 		React 					from 'react';
import { 	Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import 		style 					from '../../styles/button';

export default class Button extends React.Component {

	render () {

		const 	theme 		= this.props.theme 									,
				type 		= this.props.type 	? this.props.type : 'primary' 	,
				appearance 	= style ( theme ) 									;

		return (
			<TouchableOpacity 
				accessibilityLabel 	= { this.props.value 		}
				onPress 			= { this.props.press 		}>
				<View 		style 	= { appearance [ type ].view }>
					<Text 	style 	= { appearance [ type ].text }>
						{ this.props.value.toUpperCase 			()}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
};
