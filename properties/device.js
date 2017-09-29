
import { 	Platform 	} 	from 'react-native';
import 		Dimensions 		from 'Dimensions';

export default {

	height 	: Dimensions.get ( 'window' ).height 	,

	os 		: {
		android : Platform.OS  === 'android' 		,
		ios 	: Platform.OS  === 'ios'
	} ,

	width 	: Dimensions.get ( 'window' ).width
	
};