
const api = {
		domain 	: 'https://files.coinmarketcap.com' ,
		icons 	: {
			small : '/static/img/coins/16x16/'
		}
	};

export default {

	currencies 	: {

		icon ( id ) {
			
			return api.domain + api.icons.small + id + '.png'
		}
	}
};