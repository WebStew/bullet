

export default {
 
	/**
	 * Re-writes the API response to our prefferd data schema.
	 * 
	 * @param {Array} data The graph results from the API we are calling.
	 */
	get ( data ) {
		
		return {

			market : {
				cap 	: data [ 'market_cap_by_available_supply' 	] ,
				volume 	: data [ 'volume_usd' 						]
			} ,

			prices : {
				btc : data [ 'price_btc' ] ,
				usd : data [ 'price_usd' ]
			}
		}

	}

};