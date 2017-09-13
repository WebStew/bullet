
import { 	compose 	,
			createStore , 
			applyMiddleware } 	from 'redux';
import 		thunk 				from 'redux-thunk';
//import { 	createLogger 	} 	from 'redux-logger';
import 		reducers 			from '../reducers/index';
import 		analytics 			from '../middleware/analytics';
import 		currency 			from '../middleware/currency';
import 		language 			from '../middleware/language';
import 		portfolio 			from '../middleware/portfolio';
import 		theme 				from '../middleware/theme';

export default function ( state : Object = {}) {

	return createStore (
		reducers 	,
		state 		,
		compose (
			applyMiddleware (
				thunk 				,
				analytics.navigate 	,
				currency.get 		,
				currency.save 		,
				language.get 		,
				language.save 		,
				portfolio.delete 	,
				portfolio.get 		,
				portfolio.save 		,
				theme.get 			,
				theme.save		
				//createLogger ()
			)
		)
	);
};
