
import 		React 		from 'react';
import { 	Text 	,
			View 	} 	from 'react-native';
import 		style 		from '../../styles/code';

export default class Code extends React.Component {

	render () {

		const theme = this.props.theme;

		return (
			<View 		style = { style ( theme ).view }>
				<Text 	style = { style ( theme ).text }>
					{ this.props.value }
				</Text>
			</View>
		);

	}
};
