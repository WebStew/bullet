
import array 		from '../utilities/array';
import constants 	from '../constants/bull';

export default function (

	state 	= {
		change 		: {} 	,
		competitors : 0 	,
		error 		: null 	,
		id 			: null 	,
		loading 	: true 	,
		market 		: null 	,
		name 		: null 	,
		prices 		: {} 	,
		rank 		: null 	,
		rating 		: 0 	,
		supply 		: {} 	,
		symbol 		: null 	,
		updated 	: null 	,
		volume 		: null
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

			let bull = {
					rating 		: 0
				};

			action.currencies.forEach (( currency ) => {

				if ( 
					! isNaN ( currency.rating ) &&
					currency.rating > bull.rating
				) {
					
					bull = currency;
				}

			});
			
			bull.loading 		= false;
			bull.competitors 	= action.currencies.length;

			return Object.assign (
				{} 		,
				state 	,
				bull
			);

		default :
			return state;
	}
};
