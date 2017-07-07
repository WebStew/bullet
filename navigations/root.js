
import 		React 				from 'react';
// import { 	Notifications 	} 	from 'expo';
import { 	StackNavigator 	} 	from 'react-navigation';
import 		router 				from './router';
// import 		push 				from '../api/push-notifications';
import 		style 				from '../styles/header';

const Root = StackNavigator (

	{
		Main : {
			screen : router
		}
	} ,

	{
		navigationOptions : () => ({
			headerStyle 		: style.default.header ,
			headerTitleStyle 	: style.default.title
		})
	}

);

export default class RootNavigator extends React.Component {


	// notify ({ origin , data }) {

	// 	console.log (
	// 		`Push notification ${ origin } with data: ${ JSON.stringify ( data )}`
	// 	);

	// }

	// subscribe () {

	// 	// Send our push token over to our backend so we can receive notifications
	// 	// You can comment the following line out if you want to stop receiving
	// 	// a notification every time you open the app. Check out the source
	// 	// for this function in api/registerForPushNotificationsAsync.js
	// 	push.setup ();

	// 	// Watch for incoming notifications
	// 	this.subscription = Notifications.addListener (
	// 		this.notify
	// 	);
	// }

	// componentDidMount () {

	// 	this.subscription = this.subscribe ();
	// }

	// componentWillUnmount () {

	// 	this.subscription && this.subscription.remove ();
	// }

	render () {

		return <Root />;
	}

}
