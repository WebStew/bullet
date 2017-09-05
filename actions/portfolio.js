
import constants from '../constants/portfolio';

export default {
	
	delete ( id ) {

		return {
			id 		: id ,
			type 	: constants.delete
		};
	} ,
	
	reset ( id ) {

		return {
			id 		: id ,
			type 	: constants.reset
		};
	} ,
	
	get () {

		return {
			type 	: constants.get
		};
	} ,

	save ( id , amount , name ) {

		return {
			amount 	: amount 	,
			id 		: id 		,
			name 	: name 		,
			type 	: constants.save
		};
	} ,
	
	set ( id , amount , name ) {

		return {
			amount 	: amount 	,
			id 		: id 		,
			name 	: name 		,
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
