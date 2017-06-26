
import { 	Permissions 	, 
			Notifications 	} from 'expo';

// Example server, implemented in Rails: https://git.io/vKHKv
const api = {
		doman 	: 'https://exponent-push-server.herokuapp.com' ,
		path 	:'/tokens' ,
		headers : {
			Accept 	: 'application/json' ,
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	}

export default {
	
	setup : async function () {

		// Android remote notification permissions are granted during the app
		// install, so this will only ask on iOS
		let { 	status } = await Permissions.askAsync ( Permissions.REMOTE_NOTIFICATIONS ) ,
				token;

		// Stop here if the user did not grant permissions
		if ( status !== 'granted ') {
			return;
		}

		// Get the token that uniquely identifies this device
		token = await Notifications.getExponentPushTokenAsync ();

		// POST the token to our backend so we can use it to send pushes from there
		return fetch ( api.domain + api.path , {
			...headers ,
			body : JSON.stringify ({
				token : {
					value : token
				}
			}) ,
			method : 'POST'
		});
	}

};
