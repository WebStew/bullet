
import api 			from '../api/currencies';
import constants 	from '../constants/currencies';

const 	error = function ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		receive = function () {

			return {
				type 	: constants.receive
			};
		} ,

		request = function () {

			return {
				type 	: constants.request
			};
		};

export default {

	get : function () {

		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ().then ( function ( response ) {

				console.log ( 'DEBUG' , response )

				return response.json ();
				
			}).then ( function ( data ) {

				dispatch ( receive 	());

			}).catch ( data => dispatch ( error ( data )));
		}
	}
};
