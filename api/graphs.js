
const api = {
		domain 	: 'https://graphs.coinmarketcap.com' 	,
		path 	:'/currencies/' 						,
		headers : {
			Accept 	: 'application/json' 				,
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	};

export default {
	
	get : async function ( id ) {

		return fetch ( api.domain + api.path + id , {
			...api.headers ,
			method : 'GET'
		});
	}

};
