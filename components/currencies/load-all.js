
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				,
			TouchableOpacity 	} 	from 'react-native';
import 		actions 				from '../../actions/currencies';
import 		style 					from '../../styles/header';
import 		api 					from '../../api/currencies';

export default connect (

	state => ({
		currencies 	: state.currencies 	,
		language 	: state.language 	,
		theme 		: state.theme
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

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	;
		let 	action;

		if ( this.props.currencies.loading ) {
			return null;
		}
		
		action = 	language.actions.load + ' '; 
		action += 	this.props.currencies.items.length > api.limit ? api.limit : language.actions.all;

		return ( 
			<TouchableOpacity 
				style  	= { style ( theme ).left.control 	}
				onPress = { this.refresh 					}
			>
				<Text style = { style ( theme ).left.text 	}>
					{ action 								}
				</Text>	
			</TouchableOpacity>
		);
	}
});