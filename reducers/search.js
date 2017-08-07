
import constants from '../constants/search';

export default function (

	state 	= {
		active 	: false ,
		term 	: null
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.active :

			return Object.assign (
				{} 		,
				state 	,
				{
					
					active : action.value
				}
			);
		
		case constants.term :

			return Object.assign (
				{} 		,
				state 	,
				{
					term : action.value
				}
			);

		default :
			return state;
	}
};
