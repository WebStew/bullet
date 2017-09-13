
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				,
			TouchableOpacity 	} 	from 'react-native';
import 		actions 				from '../../actions/currencies';
import 		style 					from '../../styles/header';
import 		api 					from '../../api/currencies';
import 		analytics 				from '../../utilities/analytics';

export default connect (

	state => ({
		currency 	: state.currency 	,
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

		const action = this.props.currencies.items.length > api.limit ? 'get' : 'stream';

		analytics.event 	( 
			'currencies' 	, 
			'load' 			, 
			action 			, 
			'user' 
		);
		this.props.dispatch ( actions [ action ] ( this.props.currency.id ));
	}

	render () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				appearance 	= style ( theme ) 		;
		let 	action;

		if ( this.props.currencies.loading ) {
			return null;
		}
		
		action = 	language.actions.load + ' '; 
		action += 	this.props.currencies.items.length > api.limit ? api.limit : language.actions.all;

		return ( 
			<TouchableOpacity 
				style  	= { appearance.left.control }
				onPress = { this.refresh 			}
			>
				<Text style = { appearance.left.text 	}>
					{ action 							}
				</Text>	
			</TouchableOpacity>
		);
	}
});