
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/currencies';
import 		style 					from '../../styles/header';
import 		api 					from '../../api/currencies';
import 		analytics 				from '../../utilities/analytics';

export default connect (

	state => ({
		bull 		: state.bull 		,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Refresh extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.refresh = this.refresh.bind ( this );
	}

	refresh () {

		if ( this.props.bull.competitors > api.limit ) {

			analytics.event 	( 'bull' , 'refresh' , 'stream' );
			this.props.dispatch ( actions.stream 				());
		}
		else {

			analytics.event 	( 'bull' , 'refresh' , 'get' 	);
			this.props.dispatch ( actions.get 					());
		}
	}

	render () {

		const theme = this.props.theme;

		if ( this.props.bull.loading ) {
			return null;
		}

		return ( 
			
			<TouchableOpacity 
				onPress = { this.refresh 				}
				style 	= { style ( theme ).right.icon 	}
			>

				<Ionicons
					name 	= { 'ios-refresh-outline' 	}
					size 	= { 32 						}
					color 	= { theme.secondary 		}
				/>
				
			</TouchableOpacity>
		);
	}
});