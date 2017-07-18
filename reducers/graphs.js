
import constants 	from '../constants/graphs';

export default function (

	state 	= {
		prices 	: {} ,
		market 	: {} ,
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
					loading : false 		,
					prices 	: action.prices ,
					volume 	: action.volume
				}
			);

		default :
			return state;
	}
};
