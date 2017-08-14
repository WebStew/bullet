
import { 	combineReducers } 	from 'redux';
import 		bull 				from '../reducers/bull';
import 		currencies 			from '../reducers/currencies';
import 		graphs 				from '../reducers/graphs';
import 		search 				from '../reducers/search';
import 		theme 				from '../reducers/theme';
import 		language 			from '../reducers/language';

export default combineReducers ({
	bull 		,
	currencies 	,
	graphs 		,
	language 	,
	search 		,
	theme
});
