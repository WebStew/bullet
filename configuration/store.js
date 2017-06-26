
import { 	compose 	,
			createStore , 
			applyMiddleware } 	from 'redux';
//import 		thunk 				from 'redux-thunk';
//import 		logger 				from 'redux-logger';
import 		reducers 			from '../reducers/index';

export default function ( state : Object = {}) {

	return createStore (
		reducers 	,
		state
		// compose (
		// 	applyMiddleware (
		// 		thunk 	,
		// 		logger ()
		// 	)
		// )
	);
};
