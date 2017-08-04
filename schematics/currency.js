
import strings from '../properties/strings';

export default {
 
	/**
	 * Re-writes the API response to our prefferd data schema.
	 * 
	 * @param {Array} data The currencies results from the API we are calling.
	 */
	get ( data ) {
		
		let currencies 	= [];

		data.forEach ( function ( currency ) {

			currencies.push ({

				change : {
					day 		: currency [ 'percent_change_24h' 	] ? parseFloat ( currency [ 'percent_change_24h' 	]) : strings.errors [ '500' ] ,
					hour 		: currency [ 'percent_change_1h' 	] ? parseFloat ( currency [ 'percent_change_1h' 	]) : strings.errors [ '500' ] ,
					week 		: currency [ 'percent_change_7d' 	] ? parseFloat ( currency [ 'percent_change_7d' 	]) : strings.errors [ '500' ]
				} ,

				id 				: currency [ 'id' 					] ,

				market : {
					usd 		: currency [ 'market_cap_usd' 		] ? parseFloat ( currency [ 'market_cap_usd' ]).toFixed ( 2 ) : strings.errors [ '500' ]
				} ,

				name 			: currency [ 'name' 				] ,

				prices : {
					btc 		: currency [ 'price_btc' 	] ? parseFloat ( currency [ 'price_btc' ]) 					: strings.errors [ '500' ] ,
					usd 		: currency [ 'price_usd' 	] ? parseFloat ( currency [ 'price_usd' ]).toFixed ( 2 ) 	: strings.errors [ '500' ]
				} ,

				rank 			: parseFloat ( currency [ 'rank' 		]) ,
				rating 			: currency [ 'market_cap_usd' ] && ( currency [ 'percent_change_1h' ] || currency [ 'percent_change_24h' ]) ? ( parseFloat ( currency [ '24h_volume_usd' ]) / parseFloat ( currency [ 'market_cap_usd' ]) * parseFloat ( currency [ 'price_usd' ]) * ( currency [ 'percent_change_1h' ] ? parseFloat ( currency [ 'percent_change_1h' ]) : parseFloat ( currency [ 'percent_change_24h' ]))).toFixed ( 2 ) : strings.errors [ '500' ] ,

				supply : {
					available 	: currency [ 'available_supply' 	] ? parseFloat ( currency [ 'available_supply' 	]).toFixed ( 2 ) : strings.errors [ '500' ] ,
					total 		: currency [ 'total_supply' 		] ? parseFloat ( currency [ 'total_supply' 		]).toFixed ( 2 ) : strings.errors [ '500' ]
				} ,

				symbol 			: currency [ 'symbol' ] ,
				updated 		: new Date ( parseInt ( currency [ 'last_updated' ])).toLocaleDateString (),

				volume : {
					usd 		: currency [ '24h_volume_usd' ] ? parseFloat ( currency [ '24h_volume_usd' ]).toFixed ( 2 ) : strings.errors [ '500' ]
				}
			});

		});

		return currencies;

	}

};