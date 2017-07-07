
import strings from '../properties/strings';
import numbers from '../utilities/numbers';

export default {
 
	/**
	 * Re-writes the API response to our prefferd data schema.
	 * 
	 * @param {Array} data The currencies results from the API we are calling.
	 */
	get ( data ) {
		
		let currencies = [];

		data.forEach ( function ( currency ) {

			currencies.push ({

				change : {
					day 		: currency [ 'percent_change_24h' 	] ? currency [ 'percent_change_24h' ] + '%' : strings.errors [ '500' ] ,
					hour 		: currency [ 'percent_change_1h' 	] ? currency [ 'percent_change_1h' 	] + '%' : strings.errors [ '500' ] ,
					week 		: currency [ 'percent_change_7d' 	] ? currency [ 'percent_change_7d' 	] + '%' : strings.errors [ '500' ]
				} ,

				id 				: currency [ 'id' 					] ,
				loading 		: false ,

				market : {
					usd 		: currency [ 'market_cap_usd' 		] ? strings.denominations.usd.symbol + parseFloat ( currency [ 'market_cap_usd' ]).toFixed ( 2 ) : strings.errors [ '500' ]
				} ,

				name 			: currency [ 'name' 				] ,

				prices : {
					btc 		:  strings.denominations.btc.symbol + currency [ 'price_btc' ] ,
					usd 		:  strings.denominations.usd.symbol + parseFloat ( currency [ 'price_usd' ]).toFixed ( 2 )
				} ,

				rank 			: numbers.rank ( currency [ 'rank' 	]) ,
				rating 			: currency [ 'market_cap_usd' 		] ? parseFloat ( currency [ '24h_volume_usd' ] / currency [ 'market_cap_usd' ]).toFixed ( 5 )  : strings.errors [ '500' ] ,

				supply : {
					available 	: currency [ 'available_supply' 	] ,
					total 		: currency [ 'total_supply' 		] 
				} ,

				symbol 			: currency [ 'symbol' 				] ,
				updated 		: currency [ 'last_updated' 		] ,

				volume : {
					usd 		: strings.denominations.usd.symbol + parseFloat ( currency [ '24h_volume_usd' ]).toFixed ( 2 )
				}
			});

		});

		return currencies;

	}

};