
import constants from '../constants/search';

export default function (

	state 	= {
		on 		: false ,
		value 	: null
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.on :

			return Object.assign (
				{} 		,
				state 	,
				{
					
					on : action.value
				}
			);
		
		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					value : action.value
				}
			);

		default :
			return state;
	}
};
