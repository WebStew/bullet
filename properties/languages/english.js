
export default {
	
	en : {

		id 		: 'en' 				,
		names 	: {
			en 	: 'English' 		,
			de 	: 'Englisch' 		,
			fr 	: 'Anglais' 		,
			ms 	: 'Bahasa Inggeris' ,
			tr 	: 'Ingilizce' 		,
			vi 	: 'Anh' 			,
			zh 	: '英语'
		} ,

		actions 		: {
			all 		: 'all' 			,
			calculating : 'Calculating...' 	,
			load 		: 'Load' 			,
			loading 	: 'Loading...' 		,
			refresh 	: 'Refresh' 		,
			return 		: 'Back' 			,
			share 		: 'Share' 			,
			search 		: 'Please enter a search term' 
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

				notice 		: 'This rating is based off of a calculation from the top {{placeholder}} crypto currencies.' ,

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

				title 			: 'Latest Bull' 	,

				values 			: {
					title 		: 'Prices'
				}

			} ,

			currencies 		: {
				title 		:'Top {{length}} Currencies' ,
				headers 	: {
					rank 	: 'Rank' 	,
					change 	: '24H' 	,
					price 	: 'Price' 	,
					rating 	: 'Rating' 
				} ,
				none 		: 'No currencies found for search term'
			} ,

			detail 			: {
				title 		: 'Detail'
			} ,

			exchanges 		: {
				title 		: 'Purchase'
			} ,

			language 		: {
				title 			: 'Change language'
			} ,

			settings 		: {
				title 		: 'Settings'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'Find the latest bull on the cryptocurrency market making the biggest noise!'
			} ,

			theme 			: {
				title 		: 'Change theme'
			} ,

			translations 	: {
				title 		: 'Submit translation' ,
				action 		: 'Send a translation' ,
				body 		: 'This application uses Google Translate to provide multilingual support for our users. It could probably be a lot better. If you speak another language and would like it added to the application please help by submitting a translation.'
			} ,

			themes 			: {
				title 		: 'Submit theme',
				action 		: 'Send a theme' ,
				body 		: 'If you would like to submit a theme please send through your colour palette and theme name and we\'ll add it to the application.'
			} ,

			donate 		: {
				action 		: 'Copy {{placeholder}} address' ,
				title 		: 'Donate' ,
				body 		: 'Please help this application stay ad free and further development by donating. Pressing the below buttons will copy the wallet address to your clipboard.' ,
				wallets 	: [
					{
						name 	: 'Ethereum' ,
						id 		: '0x790b032d497131296eae4250a4840785dfcfd83e'
					} ,
					{
						name 	: 'BitCoin' ,
						id 		: '1MGkY3ZtvPVZUrg68eMdeKcjAv5FwD7hhm'
					} ,
					{
						name 	: 'LiteCoin' ,
						id 		: 'Li5YUuaso9Dzmf1ZB9qrh9QBfy9TWeLTdJ'
					} ,
					{
						name 	: 'Groestlcoin' ,
						id 		: 'FqmnNi5CVUi3wPBhzCZkTWRyE666j6oYat'
					} , 
					{
						name 	: 'NEO' ,
						id 		: 'ARr1SNboRfbHEjnpnrdVkpApz9cNknS7hL'
					}
				]
			}
		}
	}
};
