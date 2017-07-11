
import api 			from '../api/currencies';
import constants 	from '../constants/currencies';
import bull 		from '../actions/bull';
import schematic 	from '../schematics/currency';

const 	currencies = { 
	
		error : function ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		set : function ( data ) {

			return {
				items 	: data ,
				type 	: constants.set
			};
		} ,

		get : function () {

			return {
				type 	: constants.get
			};
		}

	};

export default {

	get : function () {

		return function ( dispatch ) {

			dispatch ( currencies.get 	());
			dispatch ( bull.get 		());

			// Get the currencies
			return api.get ()

				// Transform the reponse
				.then (( response ) => response.json ())
				
				// Dispatch the data
				.then ( function ( data ) {

					// Rewrite the API response to our data schema
					const normalised = schematic.get ( data );

					dispatch ( currencies.set 	( normalised ));
					dispatch ( bull.set 		( normalised ));
				
				})
				
				// Or dispatch an error
				.catch ( function ( data ) {

					dispatch ( bull.error 		( data ));
					dispatch ( currencies.error ( data ));

				});
		}
	}
};
