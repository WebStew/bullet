
const strings = {

		en : {
			
			denominations 		: {

				btc 		: {
					name 	: 'BitCoin' 	,
					symbol 	: 'BTC'
				} ,
				usd 		: {
					name 	: 'US Dollar' 	,
					symbol 	: '$'
				}
			} ,

			development : {

				cache 			: 'There was an error caching assets ( see: main.js ), perhaps due to a network timeout, so we skipped caching. Reload the app to try again.' ,
				notification 	: 'Development mode is enabled, your app will run slightly slower but you have access to useful development tools.'

			} ,

			errors : {
				500 			: 'Unavailable'
			} ,


			screens : {

				bull 			: {

					changes 	: {
						hour 	: 'Last Hour' 	,
						day 	: 'Last Day' 	,
						title 	: 'Movement' 	,
						week 	: 'Last Week'
					} ,

					market 			: {
						available 	: 'Supply Available' 	,
						cap 		: 'Cap' 				,
						rank 		: 'Rank' 				,
						title 		: 'Market' 				,
						total 		: 'Supply Total' 		,
						updated 	: 'Last Updated' 		,
						volume 		: '24 Hour Volume'
					} 										,

					rating 			: 'BULLet rating' 		,

					title 			: 'The BULLet' 			,

					values 			: {
						title 		: 'Prices'
					}

				} ,

				currencies 		: {
					title 		:'All Crypto Currencies'
				}

			}
		}
	} ,

	language = 'en';


export default strings [ language ];