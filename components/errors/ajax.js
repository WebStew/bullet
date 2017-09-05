
import 		React 					from 'react';
import { 	Text 				, 
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		style 					from '../../styles/errors';
import 		layout 					from '../../styles/layout';

export default class Error extends React.Component {

	render () {

		const 	language 	= this.props.language 							,
				text 		= this.props.text || language.errors.default 	,
				theme 		= this.props.theme 								,
				arrange 	= layout 	( theme ) 							,
				appearance 	= style 	( theme ) 							;

		// If there is no error return
		if ( ! this.props.error ) {
			return null;
		}

		return (
			<View style = {{
				...arrange.fill ,
				...arrange.row
			}}>
				<TouchableOpacity 
					style 	= { appearance.ajax.view 	} 
					onPress = { this.props.press 		}
				>
					<Ionicons
						name 	= 'ios-refresh'
						size 	= { 64 					}
						color 	= { theme.secondary}
					/>
					<Text style = { appearance.ajax.text }>
						{ text }
					</Text>
				</TouchableOpacity>
			</View>
		);
	}	
};