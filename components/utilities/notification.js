
import 		React 				from 'react';
import { 	View 			,
			Text 			} 	from 'react-native';
import 		styles 				from '../../styles/notification';

export default class Notification extends React.Component {

	render () {

		const 	type 		= this.props.type 									,
				theme 		= this.props.theme 									,
				appearance 	= styles ( theme ) 									,
				style 		= appearance [ type ] || appearance.notification 	;

		return (
			<View style = {{
				...appearance.default ,
				...style
			}}>
				<Text>{ this.props.message }</Text>
			</View>
		);
	}

};