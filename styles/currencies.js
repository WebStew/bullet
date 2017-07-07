
import theme from './theme';

export default {

	icon : {
		height 			: 16 	, 
		marginRight 	: 5 	,
		width 			: 16 
	} ,

	item : {
		alignItems 			: 'center' 				,
		flex 				: 1 					,
		flexDirection 		: 'row' 				,
		padding 			: 10
	} ,

	list : {
		flex : 1
	} ,

	name : {
		color 		: theme.accents [ 1 ] 	,
		flex 		: 2 					,
		fontWeight 	: 'bold'
	} ,

	price : {
		color 		: theme.accents [ 1 ] 	,
		flex 		: 1 ,
		textAlign 	: 'right'
	} ,

	text : {
		color 		: theme.accents [ 1 ] 	,
		flex : 1
	}

};