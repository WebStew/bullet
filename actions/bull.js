
import constants from '../constants/bull';

export default {

	error ( data ) {

		return {
			error 	: data ,
			type 	: constants.error
		};
	} ,
	
	get () {

		return {
			loading : true ,
			type 	: constants.get
		};
	} ,

	set ( currencies ) {

		return {
			currencies 	: currencies 	,
			loading 	: false 		,
			type 		: constants.set
		};
	}

};
