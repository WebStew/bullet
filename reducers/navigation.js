
import constants from '../constants/navigation';

export default function (

	state 	= {
		previous 	: null ,
		current 	: null
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.navigate :

			return Object.assign (
				{} 		,
				state 	,
				{
					current 	: action.current ,
					previous 	: action.previous
				}
			);

		default :
			return state;
	}
};
