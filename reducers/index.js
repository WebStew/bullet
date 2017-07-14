
import { 	combineReducers } 	from 'redux';
import 		bull 				from '../reducers/bull';
import 		currencies 			from '../reducers/currencies';
import 		graphs 				from '../reducers/graphs';

export default combineReducers ({
	bull 		,
	currencies 	,
	graphs
});
