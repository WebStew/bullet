
import constants from '../constants/portfolio';

export default {
	
	get () {

		return {
			type 	: constants.get
		};
	} ,
	
	reset ( id ) {

		return {
			id 		: id ,
			type 	: constants.reset
		};
	} ,

	save ( id , amount ) {

		return {
			amount 	: amount 	,
			id 		: id 		,
			type 	: constants.save
		};
	} ,
	
	set ( id , amount ) {

		return {
			amount 	: amount 	,
			id 		: id 		,
			type 	: constants.set
		};
	} ,

	setup ( items ) {

		return {
			items 	: items ,
			type 	: constants.setup
		};
	}
};
