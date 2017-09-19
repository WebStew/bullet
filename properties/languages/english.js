
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
			ad 			: 'Sponsored' 					,
			all 		: 'all' 						,
			add 		: 'Add' 						,
			calculating : 'Calculating...' 				,
			cancel 		: 'Cancel' 						,
			load 		: 'Load' 						,
			loading 	: 'Loading...' 					,
			more 		: 'Read more' 					,
			refresh 	: 'Refresh' 					,
			return 		: 'Back' 						,
			remove 		: 'Remove' 						,
			share 		: 'Share' 						,
			search 		: 'Please enter a search term' 	,
			update 		: 'Update'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
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

				description : 'The Bull rating is a number based off the total volume of coins moved in the last 24 hours by market cap, price and latest trending time frame change The time frame can be as little as an hour or at most a day. The higher this number is the more likely the currency is trending in a positive direction.' ,

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

			currency 		: {
				title 		: 'Change currency'
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
			
			converter 		: {
				title 		: 'Converter' ,
				placeholder : 'Amount'
			} ,

			detail 			: {
				title 		: 'Detail' 				,
				add 		: 'Add to portfolio' 	,
				update 		: 'Update portfolio'
			} ,

			exchanges 		: {
				title 		: 'Purchase'
			} ,

			language 		: {
				title 		: 'Change language'
			} ,
			
			news 			: {
				title 		: 'News'
			} ,
			
			portfolio 		: {
				404 		: 'You have not added any currencies to your portfolio. Please add them from the currency detail screen and we\'ll be able to advise you of an estimated worth for your coin collection' ,
				description : 'Add {{placeholder}} to your portfolio list to keep a track of all your coins and their combined worth.' ,
				headers 	: {
					amount 	: 'Amount' 	,
					name 	: 'Name' 	,
					price 	: 'Price' 	,
					total 	: 'Total'
				} ,
				title 		: 'Portfolio'
			} ,

			settings 		: {
				title 		: 'Settings'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'Find the latest bull on the cryptocurrency market making the biggest noise! #Cryptobullography'
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
