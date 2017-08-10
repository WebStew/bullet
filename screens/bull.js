
import 		React 				from 'react';
import { 	connect 		} 	from 'react-redux';
import { 	ScrollView 		,
			Text 			,
			View 			} 	from 'react-native';
import { 	Ionicons 		} 	from '@expo/vector-icons';
// import 		Error 				from '../components/errors/ajax';
// import 		Loader 				from '../components/utilities/loader';
// import 		Notification 		from '../components/utilities/notification';
// import 		Header 				from '../components/bull/header';
//import 		Overview 			from '../components/bull/overview';
// import 		NotFound 			from '../components/bull/404';
//import 		Refresh 			from '../components/bull/refresh';

import 		actions 			from '../actions/currencies';
// import 		style 				from '../styles/bull';
// import 		scene 				from '../styles/scene';
import 		strings 			from '../properties/strings';

export default connect (

	state => ({
		bull : state.bull
	})

) ( class Bull extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		return {
			// headerRight : <Refresh 	/> ,
			// headerTitle : <Header 	/> ,
			tabBarIcon : ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-trending-up-outline'
						size 	= { 32 																	}
						color 	= { focused ? screenProps.theme.disabled : screenProps.theme.secondary 	}
					/>
				);
			} ,
			title 		: strings.screens.bull.title
		};
	};

	constructor ( props ) {
		super 	( props );
		
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

		// Gets the first 100 tokens from the API
		this.props.dispatch ( actions.get 		());

		// Gets the entire list of tokens from the API in the background
		//this.props.dispatch ( actions.stream 	());
	}

	render () {
		
		// { this.notification ()}

		// if ( this.props.bull.loading ) {

		// 	return (
		// 		<View  style 	= { scene.default }>
		// 			<Loader 
		// 				loading = { this.props.bull.loading }
		// 				size = 'large'
		// 			/>
		// 		</View>
		// 	);
		// }

		// if ( this.props.bull.error ) {

		// 	return (
		// 		<Error 
		// 			error 	= { this.props.bull.error 	}
		// 			press 	= { this.refresh 			}
		// 			text 	= { strings.errors.ajax 	}
		// 		/>
		// 	);

		// }

		// if ( this.props.bull.rating === 0 ) {

		// 	return (
		// 		<NotFound 
		// 			bull = { this.props.bull }
		// 		/>
		// 	);
		// }
		// 				<Overview 
		// 			bull = { this.props.bull }
		// 		/>
//style 	= { scene.default }
		return (
			<ScrollView >
				<Text>This is a test</Text>
			</ScrollView>
		);

	}
});
