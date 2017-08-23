
import analytics from '../utilities/analytics';
import constants from '../constants/navigation';

export default {

	navigate : store => next => action => {

		// This will track all screen navigation
		if ( action.type === constants.navigate ) {

			analytics.event ( 'navigate' , action.current , 'from' , action.previous );
			next ( action )
		}

		else {
			next ( action );
		}
	}
};
