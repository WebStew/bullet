
import api 			from '../api/news';
import constants 	from '../constants/news';
import schematic 	from '../schematics/news';

const news = { 

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
				items 	: data ,
				type 	: constants.set
			};
		}
	};

export default {

	get () {

		return ( dispatch ) => {

			dispatch ( news.get ());

			// Get the currencies
			return api.get ()

				// Transform the reponse
				.then (( response ) => response.text ())
				
				// Dispatch the data
				.then (( data ) => {

					const normalised = schematic.get ( data );

					dispatch ( news.set ( normalised ));
				
				})
				
				// Or dispatch an error
				.catch (( data ) => dispatch ( news.error ( data )));
		}
	}
};