
const api 	= {
		domain 	: 'https://feeds.feedburner.com' 	,
		path 	:'/CoinDesk' 						,
		params 	: {
			format 	: '?format=xml'
		} 											,
		headers : {
			Accept 	: 'text/xml' 					,
			headers : {
				'Content-Type' : 'text/xml'
			}
		}
	};

export default {
	
	get 	: async function () {

		const url = api.domain + api.path + api.params.format;

		return fetch ( url , {
			...api.headers ,
			method : 'GET'
		});
	}
};
