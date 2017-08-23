
import constants from '../constants/navigation';

export default {

	navigate ( previous , current ) {

		return {
			previous 	: previous 			,
			current 	: current 			,
			type 		: constants.navigate
		};
	}

};
