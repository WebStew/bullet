
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		style 					from '../../styles/search';
import 		theme 					from '../../styles/theme';

export default connect (

	state => ({
		search : state.search
	})

) ( class SearchIcon extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.active = this.active.bind ( this );
	}

	active () {

		this.props.dispatch ( actions.active ( ! this.props.search.active ));
	}

	render () {

		return (

			<TouchableOpacity 
				onPress = { this.active }
				style 	= { style.icon 	}
			>

				<Ionicons
					name 	= { 'ios-search-outline' 													}
					size 	= { 24 																		}
					color 	= { this.props.search.active ? theme.accents [ 2 ] : theme.primaries [ 1 	]}
				/>
				
			</TouchableOpacity>
		);
	}
});
