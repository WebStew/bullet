
import constants 	from '../constants/theme';
import themes 		from '../properties/themes';

const initial = themes [ Object.keys ( themes ) [ 0 ]];

export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		id 			: initial.id 		,
		base 		: initial.base 		,
		body 		: initial.body 		,
		border 		: initial.border 	,
		chrome 		: initial.chrome 	,
		disabled 	: initial.disabled 	,
		name 		: initial.name 		,
		negative 	: initial.negative 	,
		positive 	: initial.positive 	,
		primary 	: initial.primary 	,
		secondary 	: initial.secondary
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				themes [ action.id ]
			);

		default :
			return state;
	}
};
