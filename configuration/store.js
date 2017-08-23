
import { 	compose 	,
			createStore , 
			applyMiddleware } 	from 'redux';
import 		thunk 				from 'redux-thunk';
//import { 	createLogger 	} 	from 'redux-logger';
import 		reducers 			from '../reducers/index';
import 		analytics 			from '../middleware/analytics';
import 		theme 				from '../middleware/theme';
import 		language 			from '../middleware/language';

export default function ( state : Object = {}) {

	return createStore (
		reducers 	,
		state 		,
		compose (
			applyMiddleware (
				thunk 				,
				analytics.navigate 	,
				language.get 		,
				language.save 		,
				theme.get 			,
				theme.save
				//createLogger ()
			)
		)
	);
};
