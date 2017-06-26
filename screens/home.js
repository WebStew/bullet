
import 		React 		from 'react';
import {
			Text 		,
			View
		} 				from 'react-native';
import 		strings 	from '../properties/strings';

export default class Home extends React.Component {

	static route = {

		navigationBar 	: {
			visible 	: false
		}
	};

	developementNotification () {

		if ( __DEV__ ) {
			
			return (
				<Text>
					{ strings.development.notification }
				</Text>
			);
		}
	}

	render () {

		return (
			<View>
				{ this.developementNotification ()}
			</View>
		);
	}

}
