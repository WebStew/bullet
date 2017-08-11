
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				} 	from 'react-native';
import 		strings 				from '../../properties/strings';
import 		style 					from '../../styles/header';

export default connect (

	state => ({
		currencies 	: state.currencies ,
		theme 		: state.theme
	})

) ( class Header extends React.Component {

	render () {

		const theme = this.props.theme;

		if ( this.props.currencies.loading ) {

			return (
				<Text style = { style ( theme ).title 	}>
					{ strings.actions.calculating 		}
				</Text>
			);
		}

		return ( 
			<Text style = { style ( theme ).title 		}>
				{ strings.screens.bull.title 			}
			</Text>
		);
	}
});