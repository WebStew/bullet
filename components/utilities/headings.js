
import 		React 			from 'react';
import { 	Text 	,
			View 		} 	from 'react-native';
import 		styles			from '../../styles/headings';

export default class Headings extends React.Component {

	render () {

		const 	type 	= this.props.type || 1 ,
				style 	= styles [ type ];

		return (
	
			<Text style = { style } >
				{ this.props.title }
			</Text>
		);
	}
};
