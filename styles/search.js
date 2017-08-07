
import theme from './theme';

export default {

	close : {
		marginLeft 	: 5 	,
		marginRight : 10 	,
		marginTop 	: 3
	} ,
	
	field : {
		flex 				: 1 					,
		flexDirection 		: 'row' 				,
	} ,

	icon : {
		marginHorizontal 	: 15
	} ,

	input : {
		backgroundColor 	: theme.accents [ 4 ] 	,
		borderColor 		: theme.accents [ 0 ] 	,
		borderRadius 		: 3 					,
		borderWidth 		: 1 					,
		color 				: theme.accents [ 1 ] 	,
		flex 				: 1 					,
		fontSize 			: 16 					,
		margin 				: 5 					,
		paddingHorizontal 	: 5
	} ,

	view : {
		backgroundColor 	: theme.accents [ 3 ] 	,
		borderBottomColor 	: theme.accents [ 0 ] 	,
		borderBottomWidth 	: 1 					,
		height 				: 40
	}
};