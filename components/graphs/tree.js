
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';

export default class Tree extends React.Component {

	render () {

		if ( this.props.loading ) {
			return null;
		}

		//console.log ( this.props.data [ 'market_cap_by_available_supply' ] [ 0 ] );
		
		// <Text>{ }</Text>

		return (
			<Text>This is a TREE test</Text>
		);

	}
};
