
import constants from '../constants/news';

export default function (

	state 	= {
		error 	: null 		,
		items 	: [] 		,
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

		case constants.get 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null ,
					loading : true
				}
			);

		case constants.set 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null 			,
					items 	: action.items 	,
					loading : false
				}
			);

		default :
			return state;
	}
};
