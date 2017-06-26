
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import { 	style 	} 	from '../styles/code';

export class Code extends React.Component {

	render () {

		return (

			<Text
				{ ...this.props }
				style = {[
					this.props.style , 
					{ style }
				]}
			/>
		);
	}
}
