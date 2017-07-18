
const data = {

		mock : false
	};


export default {

	data : {

		mock : ( function () { 
			
			return ( __DEV__ && data.mock );
			
		} ())
	}
};