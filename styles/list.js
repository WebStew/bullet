
import theme from '../configuration/theme';

export default {

	body : {
		flex : 1
	} ,
	
	cell : {
		flex 				: 1 ,
		paddingHorizontal 	: 2 ,
		paddingVertical 	: 10
	} ,

	'cell-text' : {
		color  	: theme.accents [ 1 ]
	} ,

	head : {
		backgroundColor 	: theme.accents [ 3 ] ,
		borderBottomColor 	: theme.accents [ 0 ] ,
		borderBottomWidth 	: 1
	} ,

	'head-text' : {
		color  		: theme.primaries [ 1 ] ,
		fontSize 	: 16
	} ,

	row : {
		alignItems 			: 'center' 	,
		flex 				: 1 		,
		flexDirection 		: 'row' 	,
		paddingHorizontal 	: 8
	}

};