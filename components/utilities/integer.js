
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import 		styles 		from '../../styles/integer';
import 		strings 	from '../../utilities/string';
import 		numbers 	from '../../utilities/numbers';

export default class Integer extends React.Component {

	render () {

		// Styles are available are highligt ( two options for gt lt 0 ) and default
		const 	number 	= ! isNaN ( this.props.value ) 																									,
				theme 	= this.props.theme 																												,
				style 	= this.props.type === 'highlight' && number ? this.props.value > 0 ? styles ( theme ).positive : styles ( theme ).negative : {} ,
				prefix 	= this.props.prefix || '' 																										,
				suffix 	= this.props.suffix || '' 																										,
				text 	= number ? prefix + numbers.format ( this.props.value ) + suffix : this.props.value;

		return (
			
			<Text 
				numberOfLines 	= { 1 }
				style 			= {{
					...styles ( theme ).default ,
					...this.props.style 		,
					...style
				}}
			>
				{ text }
			</Text>
		);
	}

};
