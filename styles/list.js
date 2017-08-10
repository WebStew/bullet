
import theme from '../configuration/palette';

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
		color  	: theme.body
	} ,

	head : {
		backgroundColor 	: theme.primary ,
		borderBottomColor 	: theme.border 	,
		borderBottomWidth 	: 1
	} ,

	'head-text' : {
		color  		: theme.secondary ,
		fontSize 	: 16
	} ,

	row : {
		alignItems 			: 'center' 	,
		flex 				: 1 		,
		flexDirection 		: 'row' 	,
		paddingHorizontal 	: 8
	}

};