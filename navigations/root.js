
import 		React 				from 'react';
import { 	StackNavigator 	} 	from 'react-navigation';
import 		router 				from './router';
// import { 	Notifications 	} 	from 'expo';
// import 		push 				from '../api/push-notifications';

const Root = StackNavigator (

	{
		Main : {
			screen : router
		}
	} ,

	{
		headerMode : 'none'
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
