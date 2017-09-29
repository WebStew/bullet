
import device from '../properties/device';

const store = device.os.ios ? 'app' : 'play';

export default {

	email 		: 'cryptobullography@gmail.com' ,
	name 		: 'Cryptobullography' 			,
	version 	: 'v4.1.0' 						,

	sentry 		: 'https://5f21c527a51e43dfb28b70feb6018448@sentry.io/221697' ,

	cryptocoinminer () {
		
		const 	stores 	= {
				app 	: 'https://itunes.apple.com/gb/app/crypto-coin-miner/id1289304469?mt=8' ,
				play 	: 'https://play.google.com/store/apps/details?id=com.webstew.cryptocoinminer&hl=en'
			};

		return stores [ store ];
	} ,

	store () {

		const 	stores 	= {
				app 	: 'https://itunes.apple.com/gb/app/crypto-coin-bull/id1257246245?mt=8' ,
				play 	: 'https://play.google.com/store/apps/details?id=com.webstew.bullet&hl=en'
			};

		return stores [ store ];
	}
	
};