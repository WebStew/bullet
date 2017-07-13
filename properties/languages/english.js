
export default {
	
	en : {

		actions 		: {
			return 		: 'Back'
		} ,
	
		denominations 	: {

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
			500 			: 'Unavailable' ,
			ajax 			: 'There was an error retrieving the data. Please try again.' ,
			default 		: 'Oops - an error has occurred. Please restart the application.'
		} ,


		screens : {

			bull 			: {

				404 		: 'Looks like there has been in a problem in some of the data. We have been unable to calculate the latest Bull - sorry!' ,

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

				rating 			: 'Bull Rating' 		,

				title 			: 'The Latest Bull' 	,

				values 			: {
					title 		: 'Prices'
				}

			} ,

			currencies 		: {
				title 		:'Crypto Currencies' ,
				headers 	: {
					rank 	: 'Rank' 	,
					change 	: '24H' 	,
					price 	: 'Price' 	,
					rating 	: 'Rating' 
				}
			} ,

			detail 			: {
				title 		: 'Detail'
			}

		}
	}
};
