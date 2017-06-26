
const api = {
		doman 	: 'https://coinmarketcap.com/api' ,
		path 	:'/ticker' ,
		headers : {
			Accept 	: 'application/json' ,
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	}

export default {
	
	get : async function () {

		return fetch ( api.domain + api.path , {
			...headers ,
			method : 'GET'
		});
	}

};
