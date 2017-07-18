
import 		React 			from 'react';
import { 	Text 		,
			View		} 	from 'react-native';
import 		align 			from '../../styles/align';
import 		style 			from '../../styles/graphs';

export default class AxisY extends React.Component {

	render () {

		let cells = this.props.data.map (( item , index ) => {

			let styles;

			switch ( index ) {

				case 0 :
					styles = {
						...style.tree.axis.y.cell ,
						...align.top
					};
					break;

				case this.props.data.length - 1 :
					styles = {
						...style.tree.axis.y.cell ,
						...align.bottom
					};
					break;
				
				default :
					styles = {
						...style.tree.axis.y.cell ,
						...align.middle
					};
			};

			return (
				<View 
					key 	= { index 	}
					style 	= { styles 	}
				>
					<Text style = { style.tree.axis.y.text }>{ item }</Text>
				</View>
			);
		});

		return (
			<View style = { style.tree.axis.y.view }>
				{ cells }
			</View>
		);
	}
}