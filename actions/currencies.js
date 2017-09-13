
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

	} ,

	callbacks 	= {

		// Dispatch an error
		error ( data , dispatch ) {

			dispatch ( bull.error 		( data ));
			dispatch ( currencies.error ( data ));
		} ,

		// Dispatch that we are getting data
		get ( dispatch ) {
			
			dispatch ( currencies.get 	());
			dispatch ( bull.get 		());
		} ,

		// Rewrite the API response to our data schema			
		normalise ( data , dispatch , currency ) {

			const normalised = schematic.get ( data , currency );

			dispatch ( currencies.set 	( normalised ));
			dispatch ( bull.set 		( normalised ));
		} ,

		// Return correct response depending on environment
		response ( response ) {
			
			return environment.data.mock ? response : response.json ();
		}
	};

export default {

	order 		: currencies.order 		,

	get ( currency ) {

		return function ( dispatch ) {

			callbacks.get ( dispatch );

			// Get the currencies
			return api.get 	( currency 				)
				.then 		( callbacks.response 	)
				.then 		(( data 				) => callbacks.normalise 	( data , dispatch , currency 	))
				.catch 		(( data 				) => callbacks.error 		( data , dispatch 				));
		}
	} ,

	stream ( currency ) {

		return function ( dispatch ) {

			callbacks.get ( dispatch );

			// Get the currencies
			return api.stream 	( currency 				)
				.then 			( callbacks.response 	)
				.then 			(( data 				) => callbacks.normalise 	( data , dispatch , currency 	))
				.catch 			(( data 				) => callbacks.error 		( data , dispatch 				));
		}
	}
};
