
import constants from '../constants/search';

export default {
	
	on ( boolean ) {

		return {
			value 	: boolean ,
			type 	: constants.on
		};
	} ,

	set ( value ) {

		return {
			value 	: value ,
			type 	: constants.set
		};
	}

};
