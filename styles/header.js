
import theme from '../configuration/theme';

export default {

	default : {

		back 	: {

			control : {
				flexDirection : 'row' ,
				paddingLeft : 10
			} ,

			text : {
				color 		: theme.secondary 	,
				fontSize 	: 18 				,
				fontWeight 	: 'normal' 			,
				paddingLeft : 5
			}

		} ,

		right 	: {

			control : {
				flexDirection : 'row' ,
				paddingRight : 10
			} ,

			text : {
				color 		: theme.secondary 	,
				fontSize 	: 18 				,
				fontWeight 	: 'normal' 			,
				paddingLeft : 5
			}
		} ,

		header 	: {
			backgroundColor 	: theme.base 	,
			borderBottomColor 	: theme.border 
		} ,

		icon : {
			height 		: 16 ,
			marginRight : 10 ,
			width 		: 16
		} ,
	
		title 	: {
			fontSize 	: 18 ,
			fontWeight 	: 'normal'
		}
	}
};