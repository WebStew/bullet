
import constants from '../constants/bull';

export default {

	error : function ( data ) {

		return {
			error 	: data ,
			type 	: constants.error
		};
	} ,
	
	get : function () {

		return {
			loading : true ,
			type 	: constants.get
		};
	} ,

	set : function ( currencies ) {

		return {
			currencies 	: currencies 	,
			loading 	: false 		,
			type 		: constants.set
		};
	}

};
