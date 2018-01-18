
import environment 	from '../configuration/environment';
import graphs 		from '../mock/graphs';

const api = {
		domain 	: 'https://graphs2.coinmarketcap.com' 	,
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

		return ( environment.data.mock ? graphs : fetch ( api.domain + api.path + id , {
			...api.headers ,
			method : 'GET'
		}));
	}

};
