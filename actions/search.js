
import constants from '../constants/search';

export default {
	
	active ( boolean ) {

		return {
			value 	: boolean ,
			type 	: constants.active
		};
	} ,

	term ( term ) {

		return {
			value 	: term ,
			type 	: constants.term
		};
	}

};
