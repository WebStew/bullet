
import api 			from '../api/graphs';
import constants 	from '../constants/graphs';

const 	graphs = { 
	
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

		set ( data ) {

			return {
				data 	: data ,
				type 	: constants.set
			};
		}

	};

export default {

	get ( id ) {

		return function ( dispatch ) {

			dispatch ( graphs.get ());

			// Get the currencies
			return api.get ( id )

				// Transform the reponse
				.then (( response ) => response.json ())
				
				// Dispatch the data
				.then ( function ( data ) {

					dispatch ( graphs.set ( data ));
				
				})
				
				// Or dispatch an error
				.catch ( function ( data ) {

					dispatch ( graphs.error ( data ));

				});
		}
	}

};
