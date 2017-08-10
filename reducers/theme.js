
import constants 	from '../constants/theme';
import themes 		from '../properties/themes';

export default function (

	// We set the default to the first array item in our configure theme properties
	state 	= {
		id 	: themes [ 0 ].id
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set :

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
