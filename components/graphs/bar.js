
import 		React 		from 'react';
import { 	Animated 	,
			View	} 	from 'react-native';
import 		colour 		from '../../utilities/colors';

export default class Bar extends React.PureComponent {

	constructor ( props ) {
		super 	( props );

		this.state = {
			height : new Animated.Value ( 0 )
		};
	}

	componentDidMount () {

		const value = this.props.value;

		Animated.timing (
			this.state.height ,
			{
				toValue 	: value ,
				duration 	: 1000
			}
		).start ();
	}

	render () {

		const 	style 	= this.props.style 		,
				color 	= this.props.color 		,
				padding = this.props.padding 	,
				height 	= this.state.height 	;

		return (
			<View style = {{
				...style.view ,
				...{
					paddingLeft 	: padding.left ,
					paddingRight 	: padding.right
				}
			}}>
				<Animated.View 
					style = {{
						...style.highlight , 
						...{
							backgroundColor : color 							,
							borderColor 	: colour.shade ( color , -0.5 ) 	,
							paddingTop 		: height
						}
					}}
				/>
			</View>
		);
	}
}