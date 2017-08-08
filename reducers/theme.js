
import constants from '../constants/currencies';

export default function (

	state 	= {
		name  : 'default' ,
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					name : action.name
				}
			);

		default :
			return state;
	}
};
