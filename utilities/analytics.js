
import { 	Platform 	} 	from 'react-native';
import { 	Amplitude 	,
			Constants 	} 	from 'expo';
import 		application 	from '../configuration/application';
import 		strings 		from './string';

let 	dimensions 		= {};

const 	configuration 	= {
		agent 		: Platform.OS === 'ios' ? Constants.platform.ios.model : 'Android : ' + Constants.deviceName ,
		client 		: Constants.deviceId 					,
		name 		: Constants.deviceName 					,
		version 	: Platform.Version
	} ,

	amplitude 		= {
		uid 		: 'bdc55b3cbe9aa875abea6c2c4645b912' 	,
	} ,
	
	google 			= {
		endpoint 	: '' 											,
		options 	:  {
			method 	: 'POST' 										,
			headers : {
			  'User-Agent': configuration.agent 					,
			}
		} 															,
		uid 		: 'UA-105110895-1' 								,
		url 		: 'https://www.google-analytics.com/collect' 	,
		version 	: 1
	} ,

	error 			= ( error ) => {

		console.log ( 'Error in Google Analytics' );
	} ,
	
	parametise 		= () => {
			
		let data = '';
		
		Object.keys ( dimensions ).forEach (( value , index ) => {
			data += '&cd' + ( index + 1 ) + '=' + value + ':' + dimensions [ value ];
		});

		return data;
	};

export default {

	setup () {

		if ( ! __DEV__ ) {

			// Setup Amplitude Tracking
			Amplitude.initialize 		( amplitude.uid 		);
			Amplitude.setUserId 		( configuration.client 	);
			Amplitude.setUserProperties ({
				agent 		: configuration.agent 	,
				application : application.version 	,
				name 		: configuration.name 	,
				version 	: configuration.version
			});

			// Setup Google Analytics
			google.endpoint += google.url 	+ '?v=' + google.version;
			google.endpoint += '&tid=' 		+ google.uid;
			google.endpoint += '&cid=' 		+ configuration.client;
			google.endpoint += '&z=' 		+ Date.now ();
			google.endpoint += '&an=' 		+ strings.datalise ( application.name );
			google.endpoint += '&av=' 		+ application.version;
		}
	} ,

	dimension ( property , value ) {

		dimensions [ strings.datalise ( property )] = strings.datalise ( value );
	} ,

	event ( category , action , label , value ) {

		let name 		= category + ':' + action ,
			parameters 	= '';

		if ( ! __DEV__ ) {
			
			name 		+= label ? ':' + label 			: '';
			name 		+= value ? ':' + value 			: '';
			
			parameters 	+= label ? '&el=' 	+ label 												: '';
			parameters 	+= value ? '&cd' 	+ ( Object.keys ( dimensions ).length + 1 ) +'='+ value : '';
	
			Amplitude.logEventWithProperties (
				strings.datalise (strings.datalise ( name )) , 
				dimensions 	
			);
			
			// Send analytics to Google
			fetch ( 
				encodeURI ( google.endpoint + '&t=event&ec=' + category + '&ea=' + action + strings.datalise ( parameters ) + parametise ()) , 
				google.options 
			).catch ( error );
		}
	} ,

	screen ( screen ) {

		if ( ! __DEV__ ) {

			// Send analytics to Amplitude
			Amplitude.logEventWithProperties (
				strings.datalise ( screen ) , 
				dimensions 
			);
			
			// Send analytics to Google
			fetch ( 
				encodeURI ( google.endpoint + '&t=screenview&cd=' + strings.datalise ( screen ) + parametise ()) , 
				google.options 
			).catch ( error );
		}
	}
};