
export default ( theme ) => {

	return {

		field : {
			flexDirection 	: 'row' , 
			marginBottom 	: 15 
		} ,

		input : {  
			borderColor 	: theme.border 	,
			borderWidth 	: 1 			,
			borderRadius 	: 5 			,
			color 			: theme.body 	,
			flex 			: 1 			,
			fontSize 		: 14 			,
			height 			: 40 			,
			padding 		: 5 			,
			textAlign 		: 'right'
		} ,

		label : {

			text : { 
				fontSize 	: 14 			,
				color 		: theme.body 	,
				textAlign 	: 'right' 
			} ,

			view : { 
				flexDirection 	: 'column' , 
				justifyContent 	: 'center' , 
				paddingRight 	: 10 
			}
		} ,

		text : { 
			fontSize 		: 14 			,
			color 			: theme.body 	,
			marginBottom 	: 15 
		} ,

		view : {
			backgroundColor 	: theme.base 	,
			borderColor 		: theme.border 	,
			borderRadius 		: 5 			, 
			borderWidth 		: 1 			, 
			paddingHorizontal 	: 15 			, 
			paddingTop 			: 15 
		}
	};
};