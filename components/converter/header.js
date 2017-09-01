
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				} 	from 'react-native';
import 		style 					from '../../styles/header';


export default connect (

	state => ({
		currencies 	: state.currencies 	,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Header extends React.Component {

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				title 		= this.props.currencies.loading ? language.actions.loading : language.screens.converter.title;

		return ( 
			<Text style = { style ( theme ).title }>
				{ title }
			</Text>
		);
	}
});