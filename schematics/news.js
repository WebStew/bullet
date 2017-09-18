
import { parseString  } from 'react-native-xml2js';

export default {

	get ( xml ) {

		let data;
		
		parseString ( 
			xml , 
			{
				emptyTag  		: null 	,
				explicitArray 	: false ,
				normalize 		: true 	, 
				normalizeTags 	: true
			} , 
			( error , json ) => data = json.rss.channel.item
		);

		return data;
	}
};