
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import 		styles 		from '../../styles/integer';
import 		strings 	from '../../utilities/string';

export default class Integer extends React.Component {

	render () {

		// Styles are available are highligt ( two options for gt lt 0 ) and default
		const style = this.props.type === 'highlight' && ! isNaN ( parseFloat ( this.props.value )) ? strings.contains ( this.props.value , '-' ) ? styles.negative : styles.positive : {};

		return (
			
			<Text style = {{
				...style 			,
				...styles.default 	,
				...this.props.style
			}}>
				{ this.props.value }
			</Text>
		);
	}

};
