
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

		left 	: {

			control : {
				flexDirection 	: 'row' ,
				paddingLeft 	: 5 	,
				paddingRight 	: 10
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
			backgroundColor 	: theme.chrome 	,
			borderBottomColor 	: theme.border 
		} ,

		icon : {
			height 		: 16 ,
			marginRight : 10 ,
			width 		: 16
		} ,
	
		title 	: {
			color 		: theme.body 	,
			fontSize 	: 18 			,
			fontWeight 	: 'normal'
		}
	}
};