
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import 		styles 		from '../../styles/integer';
import 		strings 	from '../../utilities/string';
import 		numbers 	from '../../utilities/numbers';

export default class Integer extends React.Component {

	render () {

		// Styles are available are highligt ( two options for gt lt 0 ) and default
		const 	value 	= this.props.value 																										,
				number 	= value ? ! isNaN ( value ) : false 																					,
				theme 	= this.props.theme 																										,
				style 	= this.props.type === 'highlight' && number ? value > 0 ? styles ( theme ).positive : styles ( theme ).negative : {} 	,
				prefix 	= this.props.prefix && value ? this.props.prefix : '' 																	,
				suffix 	= this.props.suffix && value ? this.props.suffix : '' 																	;
		
		let 	text 	= number ? prefix + numbers.format ( this.props.value ) + suffix : this.props.value 									;

		text = text || this.props.language.errors [ '500' ];

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
