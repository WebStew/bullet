
import 		React 		from 'react';
import { 	View	} 	from 'react-native';
import 		colour 		from '../../utilities/colors';

export default class Bar extends React.PureComponent {

	render () {

		const 	style 	= this.props.style ,
				color 	= this.props.color 	,
				padding = this.props.padding 	;

		return (
			<View style = {{
				...style.view ,
				...{
					paddingLeft 	: padding.left ,
					paddingRight 	: padding.right
				}
			}}>
				<View 
					style = {{
						...style.highlight , 
						...{
							backgroundColor : color 							,
							borderColor 	: colour.shade ( color , -0.25 ) 	,
							paddingTop 		: this.props.value
						}
					}}
				/>
			</View>
		);
	}
}