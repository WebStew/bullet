
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

			const methods = {

					change 	( a , b ) {

						return ( b.change.day - a.change.day );

					} ,

					price 	( a , b ) {

						return ( b.prices.fiat - a.prices.fiat );
					} ,
					
					rank 	( a , b ) {

						return ( a.rank - b.rank );
					} ,

					rating 	( a , b ) {
						
						if ( isNaN ( a.rating ) || isNaN ( b.rating )) {

							return a.rating > b.rating ? 1 : -1;
						}

						return b.rating - a.rating;
					}
				} ,
		
				items = state.items.slice ( 0 );
		

			return Object.assign (
				{} 		,
				state 	,
				{
					ordering 	: false 		,
					order 		: action.order  ,
					items 		: items.sort ( methods [ action.order ])
				}
			);

		default :
			return state;
	}
};
