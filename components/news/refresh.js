
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/news';
import 		style 					from '../../styles/header';
import 		analytics 				from '../../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language 	,
		news 		: state.news 		,
		theme 		: state.theme
	})

) ( class Refresh extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.refresh = this.refresh.bind ( this );
	}

	refresh () {

		analytics.event ( 
			'news' 		, 
			'refresh' 	, 
			'get' 		,
			'user' 
		);
		this.props.dispatch ( actions.get ());
	}

	render () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		if ( this.props.news.loading ) {
			
			return null;
		}

		return (
			<TouchableOpacity 
				onPress = { this.refresh 			}
				style 	= { appearance.right.icon 	}
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