
import themes from '../properties/themes';

import database from './database';


let test;

database.settings.setup ();


console.log ( 'GETTING THE THEME FROM THEME>JS ' );
database.settings.get ( 'theme' , ( data , results ) => {

	test = results.rows._array.length ? results.rows._array [ 0 ].value : 'default';
	
	export default themes.find ( theme => theme.id === test );
});

//console.log ( test );


