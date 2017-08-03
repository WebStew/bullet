
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				,
			TouchableOpacity 	} 	from 'react-native';
import 		actions 				from '../../actions/currencies';
import 		strings 				from '../../properties/strings';
import 		style 					from '../../styles/header';
import 		api 					from '../../api/currencies';

export default connect (

	state => ({
		bull : state.bull
	})

) ( class Refresh extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.refresh = this.refresh.bind ( this );
	}

	refresh () {

		if ( this.props.bull.competitors > api.limit ) {
			this.props.dispatch ( actions.stream 	());
		}
		else {
			this.props.dispatch ( actions.get 		());
		}
	}

	render () {

		if ( this.props.bull.loading ) {
			return null;
		}

		return ( 
			<TouchableOpacity 
				style  	= { style.default.right.control }
				onPress = { this.refresh 				}
			>
				<Text style = { style.default.right.text }>
					{ strings.actions.refresh }
				</Text>	
			</TouchableOpacity>
		);
	}
});