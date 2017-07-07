
import theme from './theme';
import colors from '../utilities/colors'

export default {

	default : {

		borderWidth 		: 1 	,
		borderRadius 		: 3 	,
		marginHorizontal 	: 15 	,
		marginVertical 		: 15 	,
		paddingHorizontal 	: 15 	,
		paddingVertical 	: 10

	} ,

	notification : {

		backgroundColor : theme.primaries [ 2 ] ,
		borderColor 	: colors.shade ( theme.primaries [ 2 ] , -0.15 ) ,

	}
	
};