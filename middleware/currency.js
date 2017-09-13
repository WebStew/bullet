
import actions 		from '../actions/currency';
import currencies 	from '../actions/currencies';
import constants 	from '../constants/currency';
import database 	from '../configuration/database';
import codes 		from '../properties/currencies';

export default {

	get : store => next => action => {

		if ( action.type === constants.get ) {

			database.settings.get ( 'currency' , ( data , results ) => {

				let id = results.rows._array.length ? results.rows._array [ 0 ].value : codes [ 0 ].id;

				// If the currency code no longers exists in our property file set it the first in array
				if ( ! codes.find (( item ) => item.id === id )) {

					id = codes [ 0 ].id;
				}

				store.dispatch 	( actions.set 		( id 	));
				store.dispatch 	( currencies.get 	( id 	));
				next 			( action 					);
			});
		}

		else {
			next ( action );
		}
	} ,

	save : store => next => action => {

		if ( action.type === constants.save ) {

			database.settings.set ( 'currency' , action.id , () => {

				store.dispatch 	( actions.set 		( action.id ));
				store.dispatch 	( currencies.get 	( action.id ));
				next 			( action 						)
			});
		}

		else {
			next ( action );
		}
	}
};
