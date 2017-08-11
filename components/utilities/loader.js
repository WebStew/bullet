
import React 							from 'react';
import 			{ ActivityIndicator } 	from 'react-native';
import style 							from '../../styles/loader';

export default class Loader extends React.Component {

	render () {

		// If we're not in loading state there is no need to render
		if ( ! this.props.loading ) {
			return null;
		}

		return (
			<ActivityIndicator
				animating 	= { this.props.loading 									}
				color 		= { this.props.color || this.props.theme.secondary 		}
				size 		= { this.props.size 									}
				style 		= { style ()											}
			/>
		);
	}
};