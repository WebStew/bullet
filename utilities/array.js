
export default {

	alphabeticalise ( array , property ) {

		return array.sort (( a , b ) => {
			
			if ( a [ property ] < b [ property ]) {

				return -1;
			}

			if ( a [ property ] > b [ property ]) {

				return 1;
			}

			return 0;
		});
	} ,

	/**
	 * Get the maximum value of a property from an array of objects.
	 */
	max ( array , property ) {

		return Math.max.apply ( Math , array.map ( function ( currency ) { 

			return currency [ property ];

		}));
	}
};