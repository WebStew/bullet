
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
					day 		: currency [ 'percent_change_24h' 	] ? parseFloat ( currency [ 'percent_change_24h' 	]) : null ,
					hour 		: currency [ 'percent_change_1h' 	] ? parseFloat ( currency [ 'percent_change_1h' 	]) : null ,
					week 		: currency [ 'percent_change_7d' 	] ? parseFloat ( currency [ 'percent_change_7d' 	]) : null
				} ,

				id 				: currency [ 'id' 					] ,

				market : {
					usd 		: currency [ 'market_cap_usd' 		] ? parseFloat ( currency [ 'market_cap_usd' ]).toFixed ( 2 ) : null
				} ,

				name 			: currency [ 'name' 				] ,

				prices : {
					btc 		: currency [ 'price_btc' 	] ? parseFloat ( currency [ 'price_btc' ]) 					: null ,
					usd 		: currency [ 'price_usd' 	] ? parseFloat ( currency [ 'price_usd' ]).toFixed ( 2 ) 	: null
				} ,

				rank 			: parseFloat ( currency [ 'rank' 	]) ,
				rating 			: currency [ 'market_cap_usd' ] && ( currency [ 'percent_change_1h' ] || currency [ 'percent_change_24h' ]) ? ( parseFloat ( currency [ '24h_volume_usd' ]) / parseFloat ( currency [ 'market_cap_usd' ]) * parseFloat ( currency [ 'price_usd' ]) * ( currency [ 'percent_change_1h' ] ? parseFloat ( currency [ 'percent_change_1h' ]) : parseFloat ( currency [ 'percent_change_24h' ]))).toFixed ( 2 ) : null ,

				supply : {
					available 	: currency [ 'available_supply' 	] ? parseFloat ( currency [ 'available_supply' 	]).toFixed ( 2 ) : null ,
					total 		: currency [ 'total_supply' 		] ? parseFloat ( currency [ 'total_supply' 		]).toFixed ( 2 ) : null
				} ,

				symbol 			: currency [ 'symbol' ] ,
				updated 		: new Date ( parseInt ( currency [ 'last_updated' ])).toLocaleDateString (),

				volume : {
					usd 		: currency [ '24h_volume_usd' ] ? parseFloat ( currency [ '24h_volume_usd' ]).toFixed ( 2 ) : null
				}
			});

		});

		return currencies;

	}

};