
import environment 	from '../configuration/environment';
import currencies 	from '../mock/currencies';

const 	limit 	= 100 									,
		api 	= {
			domain 	: 'https://api.coinmarketcap.com' 	,
			path 	:'/v1/ticker/' 						,
			params 	: {
				limit 		: 'limit=' 					,
				currency 	: 'convert='
			} 											,
			headers : {
				Accept 	: 'application/json' 			,
				headers : {
					'Content-Type' : 'application/json'
				}
			}
		};

export default {
	
	get 	: async function ( currency ) {

		const url = api.domain + api.path + '?' + api.params.limit + limit + '&' + api.params.currency + currency;

		return environment.data.mock ? currencies : fetch ( url , {
			...api.headers ,
			method : 'GET'
		});
	} ,

	limit 	: limit ,

	stream 	: async function ( currency ) {

		const url = api.domain + api.path + '?' + api.params.limit + '0&' + api.params.currency + currency;

		return environment.data.mock ? currencies : fetch ( url , {
			...api.headers ,
			method : 'GET'
		});
	}
};
