
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
		bull 	: state.bull ,
		theme 	: state.theme
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

		const theme = this.props.theme;

		if ( this.props.bull.loading ) {
			return null;
		}

		return ( 
			<TouchableOpacity 
				style  	= { style ( theme ).right.control 	}
				onPress = { this.refresh 					}
			>
				<Text style = { style ( theme ).right.text 	}>
					{ strings.actions.refresh 				}
				</Text>	
			</TouchableOpacity>
		);
	}
});