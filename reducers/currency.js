
import constants 	from '../constants/currency';
import currencies 	from '../properties/currencies';

//const initial = languages [ Object.keys ( languages ) [ 0 ]];

export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		id 		: null 	,
		loading : true 	,
		names 	: [] 	,
		symbol 	: null
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set :

			const currency = currencies.find (( item ) => item.id === action.id );

			return Object.assign (
				{} 		,
				state 	,
				{
					...currency ,
					loading : false
				} ,
			);

		default :
			return state;
	}
};
