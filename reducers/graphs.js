
import constants 	from '../constants/graphs';

export default function (

	state 	= {
		data 	: null ,
		loading : true
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.error 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: action.error ,
					loading : false
				}
			);
		
		case constants.get		:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null ,
					loading : true
				}
			);


		case constants.set 		:

			return Object.assign (
				{} 		,
				state 	,
				{
					data 	: action.data ,
					loading : false
				}
			);

		default :
			return state;
	}
};
