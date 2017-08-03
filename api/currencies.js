
import environment 	from '../configuration/environment';
import currencies 	from '../mock/currencies';

const 	limit 	= 100 ,

		api 	= {
			domain 	: 'https://api.coinmarketcap.com' 	,
			path 	:'/v1/ticker/' 						,
			params 	: '?limit=' + limit 				,
			headers : {
				Accept 	: 'application/json' 			,
				headers : {
					'Content-Type' : 'application/json'
				}
			}
		};

export default {
	
	get 	: async function () {

		return environment.data.mock ? currencies : fetch ( api.domain + api.path + api.params , {
			...api.headers ,
			method : 'GET'
		});
	} ,

	limit 	: limit ,

	stream 	: async function () {

		return environment.data.mock ? currencies : fetch ( api.domain + api.path , {
			...api.headers ,
			method : 'GET'
		});
	}

};
