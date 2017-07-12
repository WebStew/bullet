
import constants from '../constants/currencies';

export default function (

	state 	= {
		error 	: null 		,
		items 	: [] 		,
		order 	: 'rank' 	,
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
					loading : false 		,
					order 	: 'rank'
				}
			);

		case constants.order :

			let sorted;
		
			switch ( action.order ) {

				case 'change' : 
						
					sorted = state.items.sort (( a , b ) => {

						return ( b.change.day - a.change.day );

					});
					
					break;

				case 'price' : 
						
					sorted = state.items.sort (( a , b ) => {

						return ( b.prices.usd - a.prices.usd );

					});

					break;

				case 'rank' : 
						
					sorted = state.items.sort (( a , b ) => {

						return ( a.rank - b.rank );

					});
					
					break;

				case 'rating' : 
						
					sorted = state.items.sort (( a , b ) => {

						if ( isNaN ( a.rating ) || isNaN ( b.rating )) {

							return a.rating > b.rating ? 1 : -1;
						}

						return b.rating - a.rating;
					});
					
					break;
			}

			return Object.assign (
				{} 		,
				state 	,
				{
					order 	: action.order  ,
					items 	: sorted
				}
			);

		default :
			return state;
	}
};
