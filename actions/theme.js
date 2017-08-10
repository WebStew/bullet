
import constants from '../constants/theme';

export default {

	get () {

		return {
			type 	: constants.get
		};
	} ,

	save ( id ) {

		return {
			id 		: id ,
			type 	: constants.save
		};
	} ,

	set ( id ) {

		return {
			id 		: id ,
			type 	: constants.set
		};
	}

};
