
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
					btc 		: parseFloat ( currency [ 'price_btc' 	]) ,
					usd 		: parseFloat ( currency [ 'price_usd' 	]).toFixed ( 2 )
				} ,

				rank 			: parseFloat ( currency [ 'rank' 		]) ,
				rating 			: currency [ 'market_cap_usd' ] && ( currency [ 'percent_change_1h' ] || currency [ 'percent_change_24h' ]) ? ( parseFloat ( currency [ '24h_volume_usd' ]) / parseFloat ( currency [ 'market_cap_usd' ]) * parseFloat ( currency [ 'price_usd' ]) * ( currency [ 'percent_change_1h' ] ? parseFloat ( currency [ 'percent_change_1h' ]) : parseFloat ( currency [ 'percent_change_24h' ]))).toFixed ( 2 ) : strings.errors [ '500' ] ,

				supply : {
					available 	: parseFloat ( currency [ 'available_supply' 	]) ,
					total 		: parseFloat ( currency [ 'total_supply' 		])
				} ,

				symbol 			: currency [ 'symbol' ] ,
				updated 		: new Date ( parseInt ( currency [ 'last_updated' ])).toLocaleDateString (),

				volume : {
					usd 		: parseFloat ( currency [ '24h_volume_usd' ]).toFixed ( 2 )
				}
			});

		});

		return currencies;

	}

};