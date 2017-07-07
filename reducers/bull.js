
import array 		from '../utilities/array';
import constants 	from '../constants/bull';

export default function (

	state 	= {
		change 	: {} 	,
		error 	: null 	,
		id 		: null 	,
		loading : true 	,
		market 	: {} 	,
		name 	: null 	,
		prices 	: {} 	,
		rank 	: null 	,
		rating 	: 0 	,
		supply 	: {} 	,
		symbol 	: null 	,
		updated : null 	,
		volume 	: {}
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.error 	:

			return Object.assign (
				{} 		,
				state 	,
				{
					error : action.error
				}
			);
		
		case constants.get		:

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : true
				}
			);


		case constants.set 		:

			let bull = state;
			
			Object.keys ( action.currencies ).forEach ( function ( key ) {

				if ( 
					action.currencies [ key ].rating > state.rating && 
					!isNaN ( action.currencies [ key ].rating )
				) {
					
					bull = action.currencies [ key ];
				}

			});

			console.log ( bull )

			return Object.assign (
				{} 		,
				state 	,
				bull
			);

		default :
			return state;
	}
};
