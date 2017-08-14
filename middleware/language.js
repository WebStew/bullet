
import actions 		from '../actions/language';
import constants 	from '../constants/language';
import database 	from '../configuration/database';
import languages 	from '../properties/languages';

export default {

	get : store => next => action => {

		if ( action.type === constants.get ) {

			database.settings.get ( 'language' , ( data , results ) => {

				const language = results.rows._array.length ? results.rows._array [ 0 ].value : null;

				// Only set the theme again if one has been saved. 
				// The default theme is already set in the reducer
				// Only set the theme if it is still present in our properties file
				if ( language && languages [ language ]) {
					
					store.dispatch 	( actions.set ( language ));
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

			database.settings.set ( 'language' , action.id , () => {

				store.dispatch 	( actions.set ( action.id 	));
				next 			( action 					)
			});
		}

		else {
			next ( action );
		}
	}
};
