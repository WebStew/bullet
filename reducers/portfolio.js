
import constants from '../constants/portfolio';

export default function (

	state 	= {
		error 		: null 	,
		items 		: [] 	,
		loading 	: true
	} , 

	action 	= {}

) {

	switch ( action.type ) {		

		case constants.reset :

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null 														,
					items 	: state.items.filter (( item ) => item.id !== action.id ) 	,
					loading : false
				}
			);
		
		case constants.setup :
		
			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null 			,
					items 	: action.items 	,
					loading : false
				}
			);
		
		case constants.set :

			const 	items = state.items ,
					index = items.findIndex (( item ) => item.id === action.id );

			if ( index > -1 ) {
				items [ index ].amount = action.amount;
			}

			else {
				items.push ({
					amount 	: action.amount ,
					id 		: action.id 	,
					name 	: action.name
				});
			}

			return Object.assign (
				{} 		,
				state 	,
				{
					error 	: null 	,
					items 	: items ,
					loading : false
				}
			);

		default :
			return state;
	}
};
