
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

		let parameters 	= '';

		if ( ! __DEV__ ) {
			
			parameters 	+= label ? '&el=' 	+ strings.datalise 	( label 		) 													: '';
			parameters 	+= value ? '&cd' 	+ ( Object.keys 	( dimensions 	).length + 1 ) + '=' + strings.datalise ( value ) 	: '';
	
			Amplitude.logEventWithProperties (
				strings.datalise ( category ) , 
				{
					...dimensions 			,
					action 		: strings.datalise ( action 	) ,
					category 	: strings.datalise ( category 	) ,
					label 		: strings.datalise ( label 		) ,
					value 		: strings.datalise ( value 		)
				}
			);
			
			// Send analytics to Google
			fetch ( 
				encodeURI ( google.endpoint + '&t=event&ec=' + strings.datalise ( category ) + '&ea=' + strings.datalise ( action ) + parameters + parametise ()) , 
				google.options 
			).catch ( error );
		}
	} ,

	screen ( screen ) {

		if ( ! __DEV__ ) {

			// Send analytics to Amplitude
			Amplitude.logEventWithProperties (
				'screen' 			,
				{ 
					...dimensions 	,
					view : strings.datalise ( screen )
				}
			);
			
			// Send analytics to Google
			fetch ( 
				encodeURI ( google.endpoint + '&t=screenview&cd=' + strings.datalise ( screen ) + parametise ()) , 
				google.options 
			).catch ( error );
		}
	}
};