
export default {

	/**
	 * Returns a number with the appropriate position suffix.
	 * 
	 * @param 	{Number} number The number to add a positioning suffix to.
	 * @returns {String} 		The number with the positioning string added to it.
	 */
	rank ( number ) {

		let suffix;
		
		// Assign according to the last number
		switch ( number.toString ().slice ( -1 )) {

			case '0' :
			case '4' :
			case '5' :
			case '6' :
			case '7' :
			case '8' :
			case '9' :
				suffix = 'th';
				break;
			
			case '1' :
				suffix = 'st';
				break;
			
			case '2' :
				suffix = 'nd';
				break;
			
			case '3' :
				suffix = 'rd';
				break;

			// Returns the number unchanged
			default :
				suffix = '';
				break;
		}

		return number + suffix;
	} ,

	/**
	 * Returns a formatted number with comma deliminated thousands.
	 * 
	 * @param 	{Number} number The number to format.
	 * @returns {String} 		The formatted number.
	 */
	format ( number ) {

		let parts;

		if ( ! number ) {

			return number;
		}
		
		parts 		= number.toString ().split ( '.' );
		parts [ 0 ] = parts [ 0 ].replace (/\B(?=(\d{3})+(?!\d))/g , ',' );

		return parts.join ( '.' );
	}

};