
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
		currencies : state.currencies
	})

) ( class All extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.refresh = this.refresh.bind ( this );
	}

	refresh () {

		if ( this.props.currencies.items.length > api.limit ) {
			this.props.dispatch ( actions.get 		());
		}
		else {
			this.props.dispatch ( actions.stream 	());
		}
	}

	render () {

		let action;

		if ( this.props.currencies.loading ) {
			return null;
		}
		
		action = 	strings.actions.load + ' '; 
		action += 	this.props.currencies.items.length > api.limit ? api.limit : strings.actions.all;

		return ( 
			<TouchableOpacity 
				style  	= { style.default.left.control 	}
				onPress = { this.refresh 				}
			>
				<Text style = { style.default.left.text }>
					{ action }
				</Text>	
			</TouchableOpacity>
		);
	}
});