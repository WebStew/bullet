
import 		React 				from 'react';
import { 	View 			,
			Text 			} 	from 'react-native';
import 		styles 				from '../../styles/notification';

export default class Notification extends React.Component {

	render () {

		const 	type 	= this.props.type ,
				style 	= styles [ type ] || styles.notification;

		return (

			<View style = {{
				...styles.default ,
				...style
			}}>
				<Text>{ this.props.message }</Text>
			</View>
		);
	}

};