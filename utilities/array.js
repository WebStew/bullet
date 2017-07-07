
export default {

	/**
	 * Get the maximum value of a property from an array of objects.
	 */
	max ( array , property ) {

		return Math.max.apply ( Math , array.map ( function ( currency ) { 

			return currency [ property ];

		}));
	}
	
};