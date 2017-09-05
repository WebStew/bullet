
import 		React 			from 'react';
import { 	Text 		,
			View		} 	from 'react-native';
import 		style 			from '../../styles/graphs';

export default class AxisY extends React.Component {

	render () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		let 	cells = this.props.data.map (( item , index ) => {

			return (
				<View 
					key 	= { index 						}
					style 	= { appearance.tree.axis.y.cell }
				>
					<Text style = { appearance.tree.axis.y.text }>
						{ item }
					</Text>
				</View>
			);
		});

		return (
			<View style = { appearance.tree.axis.y.view }>
				{ cells }
			</View>
		);
	}
}