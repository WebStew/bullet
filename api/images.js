
const api = {

		domain 	: 'https://files.coinmarketcap.com' ,

		icons 	: {

			small 	: '/static/img/coins/16x16/' ,
			medium 	: '/static/img/coins/32x32/' ,
			large 	: '/static/img/coins/64x64/'

		}
	};

export default {

	currencies 	: {

		small ( id ) {
			
			return api.domain + api.icons.small + id + '.png';
		} ,

		medium ( id ) {
			
			return api.domain + api.icons.medium + id + '.png';
		} ,

		large ( id ) {
			
			return api.domain + api.icons.large + id + '.png';
		}
	}
};