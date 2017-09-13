
export default {
 
	/**
	 * Re-writes the API response to our prefferd data schema.
	 * 
	 * @param {Array} data The currencies results from the API we are calling.
	 */
	get ( data , code ) {
		
		return data.map ( function ( currency ) {

			const fiat 	= {
					market 	: currency [ 'market_cap_' 	+ code 	] ? currency [ 'market_cap_' 	+ code ] : currency [ 'market_cap_usd' 	] ,
					price 	: currency [ 'price_' 		+ code 	] ? currency [ 'price_' 		+ code ] : currency [ 'price_usd' 		] ,
					volume 	: currency [ '24h_volume_' 	+ code 	] ? currency [ '24h_volume_' 	+ code ] : currency [ '24h_volume_usd' 	]
				};

			return {

				change : {
					day 	: currency [ 'percent_change_24h' 	] ? parseFloat ( currency [ 'percent_change_24h' 	]) : null ,
					hour 	: currency [ 'percent_change_1h' 	] ? parseFloat ( currency [ 'percent_change_1h' 	]) : null ,
					week 	: currency [ 'percent_change_7d' 	] ? parseFloat ( currency [ 'percent_change_7d' 	]) : null
				} ,

				id : currency [ 'id' ] ,

				market : fiat.market ? parseFloat ( fiat.market ).toFixed ( 2 ) : null ,

				name : currency [ 'name' ] ,

				prices : {
					btc 	: currency [ 'price_btc' ] 	? parseFloat ( currency [ 'price_btc' ]) 	: null ,
					fiat 	: fiat.price 				? parseFloat ( fiat.price ).toFixed ( 2 ) 	: null
				} ,

				rank 	: parseFloat ( currency [ 'rank' ]) ,
				rating 	: fiat.market && ( currency [ 'percent_change_1h' ] || currency [ 'percent_change_24h' ]) ? ( parseFloat ( fiat.volume ) / parseFloat ( fiat.market ) * parseFloat ( fiat.price ) * ( currency [ 'percent_change_1h' ] ? parseFloat ( currency [ 'percent_change_1h' ]) : parseFloat ( currency [ 'percent_change_24h' ]))).toFixed ( 2 ) : null ,

				supply : {
					available 	: currency [ 'available_supply' ] ? parseFloat ( currency [ 'available_supply' 	]).toFixed ( 2 ) : null ,
					total 		: currency [ 'total_supply' 	] ? parseFloat ( currency [ 'total_supply' 		]).toFixed ( 2 ) : null
				} ,

				symbol 	: currency [ 'symbol' ] ,
				updated : new Date ( parseInt ( currency [ 'last_updated' ])).toLocaleDateString () ,

				volume : fiat.volume ? parseFloat ( fiat.volume ).toFixed ( 2 ) : null
			};
		});
	}
};