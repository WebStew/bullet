
const 	name = ( state ) => {

		if ( ! state ) {
			return null;
		}

		const route = state.routes [ state.index ];
	
		// Nested navigators
		if ( route.routes ) {
			return name ( route );
		}

		return route.routeName;
	};


export default {

	name : name
};