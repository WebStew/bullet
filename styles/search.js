
import theme from '../configuration/theme';

export default {

	close : {
		marginLeft 	: 5 	,
		marginRight : 10 	,
		marginTop 	: 3
	} ,
	
	field : {
		flex 				: 1 			,
		flexDirection 		: 'row' 		,
	} ,

	icon : {
		marginHorizontal 	: 15
	} ,

	input : {
		backgroundColor 	: theme.base 	,
		borderColor 		: theme.border 	,
		borderRadius 		: 3 			,
		borderWidth 		: 1 			,
		color 				: theme.body 	,
		flex 				: 1 			,
		fontSize 			: 16 			,
		margin 				: 5 			,
		paddingHorizontal 	: 5
	} ,

	view : {
		backgroundColor 	: theme.primary ,
		borderBottomColor 	: theme.border 	,
		borderBottomWidth 	: 1 			,
		height 				: 40
	}
};