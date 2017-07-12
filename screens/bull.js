
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	View 			,
			Text 			} 	from 'react-native';
import 		Error 				from '../components/errors/ajax';
import 		Loader 				from '../components/utilities/loader';
import 		Notification 		from '../components/utilities/notification';
import 		Overview 			from '../components/bull/overview';
import 		NotFound 			from '../components/bull/404';
import 		actions 			from '../actions/currencies';
import 		style 				from '../styles/bull';
import 		styleScene 			from '../styles/scene';
import 		strings 			from '../properties/strings';

export default connect (

	state => ({
		bull : state.bull
	})

) ( class Bull extends React.Component {

	static navigationOptions = {

		headerTitle : strings.screens.bull.title ,
		tabBarLabel : strings.screens.bull.title

	};

	constructor ( props ) {

		super ( props );
		
		this.refresh = this.refresh.bind ( this );
		this.refresh ();
	}

	notification () {

		if ( __DEV__ ) {
			
			return (
				<Notification message = { strings.development.notification } />
			);
		}
	}

	refresh () {

		this.props.dispatch ( actions.get ());
	}

	render () {
		
		// { this.notification ()}

		return (
			<View style 		= { styleScene.default 		}>

				<Loader
					loading 	= { this.props.bull.loading }
					size 		= 'large'
				/>

				<Error 
					error 		= { this.props.bull.error 	}
					press 		= { this.refresh 			}
					text 		= { strings.errors.ajax 	}
				/>

				<NotFound 
					bull 		= { this.props.bull 		}
				/>

				<Overview 
					bull 		= { this.props.bull 		}
				/>
				
			</View>
		);

	}
});
