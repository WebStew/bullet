
import constants 	from '../constants/language';
import languages 	from '../properties/languages';

const initial = languages [ Object.keys ( languages ) [ 0 ]];

export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		id 				: initial.id 			,
		actions 		: initial.actions 		,
		denominations 	: initial.denominations ,
		development 	: initial.development 	,
		errors 			: initial.errors 		,
		name 			: initial.name 			,
		screens 		: initial.screens
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				languages [ action.id ]
			);

		default :
			return state;
	}
};
