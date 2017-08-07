
import { 	combineReducers } 	from 'redux';
import 		bull 				from '../reducers/bull';
import 		currencies 			from '../reducers/currencies';
import 		graphs 				from '../reducers/graphs';
import 		search 				from '../reducers/search';

export default combineReducers ({
	bull 		,
	currencies 	,
	graphs 		,
	search
});
