
import 		React 		from 'react';
import { 	Text 	, 
			View	} 	from 'react-native';

export default class Header extends React.PureComponent {

	render () {

		const style = this.props.style;

		return (
			<View 	style = {style.view }>
			<Text	style = {style.text }>
				{ this.props.value }
			</Text>
		</View>
		);
	}
}