
import { 	Platform 		} 	from 'react-native';
import { 	Constants 		} 	from 'expo';
import { 	Analytics 	,
			Hits as GAHits 	} 	from 'react-native-google-analytics';
import 		application 		from '../configuration/application';

const configuration = {
		agent 		: Platform.OS === 'ios' ? Constants.platform.ios.model : 'Android : ' + Constants.deviceName ,
		client 		: Constants.deviceId 		,
		uid 		: 'UA-104704272-1' 			,
		version 	: Platform.Version
	} ,
	
	tracker 		= new Analytics ( 
		configuration.uid 		, 
		configuration.client 	, 
		configuration.version 	, 
		configuration.agent 
	);

export default {

	dimension ( property , value ) {

		if ( ! __DEV__ ) {

			tracker.addDimension ( property , value );
		}
	} ,

	event ( category , action , label , value ) {

		if ( ! __DEV__ ) {

			const data = new GAHits.Event ( 
					category 	, 
					action 		, 
					label 		,
					value
				);	
			
			tracker.send ( data );
		}
	} ,

	screen ( screen ) {

		if ( ! __DEV__ ) {

			const data = new GAHits.ScreenView (
				application.name 	,
				screen 				,
				configuration.agent ,
				configuration.client
			);

			tracker.send ( data );
		}
	}
};