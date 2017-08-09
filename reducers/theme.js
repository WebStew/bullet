
import constants 	from '../constants/theme';
import themes 		from '../properties/themes';
import database 	from '../configuration/database';

export default function (

	// We set the default to the first array item in our configure theme properties
	state 	= {
		id 	: themes [ 0 ].id
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set 	:

			// Persist to the database
			database.settings.set ( 'theme' , action.id );

			return Object.assign (
				{} 		,
				state 	,
				{
					id : action.id
				}
			);

		default :
			return state;
	}
};
