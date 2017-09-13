
import { 	combineReducers } 	from 'redux';
import 		bull 				from './bull';
import 		currency 			from './currency';
import 		currencies 			from './currencies';
import 		graphs 				from './graphs';
import 		language 			from './language';
import 		navigation 			from './navigation';
import 		portfolio 			from './portfolio';
import 		search 				from './search';
import 		theme 				from './theme';

export default combineReducers ({
	bull 		,
	currency 	,
	currencies 	,
	graphs 		,
	language 	,
	navigation 	,
	portfolio 	,
	search 		,
	theme
});
