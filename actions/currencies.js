
import api 			from '../api/currencies';
import constants 	from '../constants/currencies';
import bull 		from '../actions/bull';
import schematic 	from '../schematics/currency';
import environment 	from '../configuration/environment';

const 	currencies = { 
	
		error ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		get () {

			return {
				type 	: constants.get
			};
		} ,

		order ( order ) {
			
			return {
				order 	: order ,
				type 	: constants.order
			};
		} ,

		set ( data ) {

			return {
				items 	: data ,
				type 	: constants.set
			};
		}

	};

export default {

	get () {

		return function ( dispatch ) {

			dispatch ( currencies.get 	());
			dispatch ( bull.get 		());

			// Get the currencies
			return api.get ()

				// Transform the reponse
				.then ( function ( response ) {

					return environment.data.mock ? response : response.json ();
				})
				
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
	} ,

	stream () {

		return function ( dispatch ) {

			// Get the currencies
			return api.stream ()

				// Transform the reponse
				.then ( function ( response ) {
					
					return environment.data.mock ? response : response.json ();
				})
				
				// Dispatch the data
				.then ( function ( data ) {

					// Rewrite the API response to our data schema
					const normalised = schematic.get ( data );

					dispatch ( currencies.set 	( normalised ));
					dispatch ( bull.set 		( normalised ));
				
				})
				
				// Or dispatch an error
				.catch ( function ( data ) {
					
					// We are not tracking errors here as the requests are all background
					dispatch ( bull.error 		( data ));
					dispatch ( currencies.error ( data ));

				});
		}
	} ,

	order : currencies.order
};
