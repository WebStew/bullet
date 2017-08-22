
import { 	Platform 	} 	from 'react-native';
import { 	Amplitude 	,
			Constants 	} 	from 'expo';
import 		application 	from '../configuration/application';
import 		strings 		from './string';

const configuration = {
		agent 		: Platform.OS === 'ios' ? Constants.platform.ios.model : 'Android : ' + Constants.deviceName ,
		client 		: Constants.deviceId 					,
		name 		: Constants.deviceName 					,
		uid 		: 'bdc55b3cbe9aa875abea6c2c4645b912' 	,
		version 	: Platform.Version
	};

let dimensions 		= {};

export default {

	setup () {

		if ( ! __DEV__ ) {

			Amplitude.initialize 		( configuration.uid 	);
			Amplitude.setUserId 		( configuration.client 	);
			Amplitude.setUserProperties ({
				agent 		: configuration.agent 	,
				application : application.version 	,
				name 		: configuration.name 	,
				version 	: configuration.version
			});
		}
	} ,

	dimension ( property , value ) {

		dimensions [ property ] = strings.datalise ( value );
	} ,

	event ( category , action , label , value ) {

		let name = category + ':' + action;

		name += label ? ':' + label : '';
		name += value ? ':' + value : '';

		if ( ! __DEV__ ) {

			Amplitude.logEventWithProperties (
				strings.datalise ( name ) , 
				dimensions 	
			);
		}
	} ,

	screen ( screen ) {

		if ( ! __DEV__ ) {

			Amplitude.logEventWithProperties (
				strings.datalise ( screen ) , 
				dimensions 
			);
		}
	}
};