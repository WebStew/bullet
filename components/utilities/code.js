
import 		React 		from 'react';
import { 	Text 	,
			View 	} 	from 'react-native';
import 		style 		from '../../styles/code';

export default class Code extends React.Component {

	render () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		return (
			<View 		style = { appearance.view }>
				<Text 	style = { appearance.text }>
					{ this.props.value }
				</Text>
			</View>
		);
	}
};
