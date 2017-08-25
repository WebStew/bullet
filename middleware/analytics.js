
import analytics from '../utilities/analytics';
import constants from '../constants/navigation';

export default {

	navigate : store => next => action => {

		// This will track all screen navigation
		if ( action.type === constants.navigate ) {

			analytics.event 	( action.previous , 'navigate' , action.current );
			analytics.screen 	( action.current 								);
			next 				( action 										);
		}

		else {
			next ( action );
		}
	}
};
