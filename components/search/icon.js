
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		style 					from '../../styles/search';
import 		theme 					from '../../configuration/palette';

export default connect (

	state => ({
		search : state.search
	})

) ( class SearchIcon extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.on = this.on.bind ( this );
	}

	on () {

		this.props.dispatch ( actions.on ( ! this.props.search.on ));
	}

	render () {

		return (

			<TouchableOpacity 
				onPress = { this.on 	}
				style 	= { style.icon 	}
			>

				<Ionicons
					name 	= { 'ios-search-outline' 									}
					size 	= { 24 														}
					color 	= { this.props.search.on ? theme.disabled : theme.secondary }
				/>
				
			</TouchableOpacity>
		);
	}
});
