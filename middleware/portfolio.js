
import actions 		from '../actions/portfolio';
import constants 	from '../constants/portfolio';
import database 	from '../configuration/database';

export default {

	get : store => next => action => {

		if ( action.type === constants.get ) {

			database.portfolio.get (( data , results ) => {

				const portfolio = results.rows._array.length ? results.rows._array : null;

				if ( portfolio ) {
					
					store.dispatch ( actions.setup ( portfolio ));
				}
				next ( action );

			});
		}

		else {
			next ( action );
		}
	} ,

	save : store => next => action => {

		if ( action.type === constants.save ) {

			database.portfolio.set ( action.id , action.amount , () => {

				store.dispatch 	( actions.set ( action.id , action.amount 	));
				next 			( action 									)
			});
		}

		else {
			next ( action );
		}
	}
};
