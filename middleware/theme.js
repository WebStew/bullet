
import actions 		from '../actions/theme';
import constants 	from '../constants/theme';
import database 	from '../configuration/database';
import themes 		from '../properties/themes';

database.settings.setup ();

export default {

	get : store => next => action => {

		if ( action.type === constants.get ) {

			database.settings.get ( 'theme' , ( data , results ) => {

				const theme = results.rows._array.length ? results.rows._array [ 0 ].value : null;

				// Only set the theme again if one has been saved. 
				// The default theme is already set in the reducer
				// Only set the theme if it is still present in our properties file
				if ( theme && themes [ theme ]) {
					
					store.dispatch 	( actions.set ( theme ));
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

			database.settings.set ( 'theme' , action.id , () => {

				store.dispatch 	( actions.set ( action.id 	));
				next 			( action 					)
			});
		}

		else {
			next ( action );
		}
	}
};
