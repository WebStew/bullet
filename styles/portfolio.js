
export default ( theme ) => {

	return {

		404 : {
			text : { 
				color 		: theme.body , 
				fontSize 	: 14 
			} ,

			view : {
				padding 	: 15
			}
		} , 

		cell 	: {
			textAlign 		: 'right'
		} ,

		head 	: {
			flex 			: 2 ,
			flexDirection 	: 'row'
		} ,
		
		icon 	: {
			height 			: 16 	, 
			marginRight 	: 5 	,
			width 			: 16 
		} ,

		name 	: {
			fontWeight 	: 'bold'
		} ,

		total 	: { 

			col : { 
				color 				: theme.body 	, 
				flex 				: 3 			, 
				fontSize 			: 14 			, 
				fontWeight 			: 'bold'		, 
				paddingHorizontal 	: 10 			,
				textAlign 			: 'right'
			} ,

			head : {
				color 				: theme.body 	, 
				flex 				: 1 			, 
				fontSize 			: 14 			, 
				fontWeight 			: 'bold' 		, 
				paddingHorizontal 	: 10 
			} ,

			view : {
				borderBottomWidth 	: 5 			,
				borderBottomColor 	: theme.border 	,
				borderTopWidth 		: 4 			,
				borderTopColor 		: theme.border 	,
				paddingVertical 	: 15 			,
				flexDirection 		: 'row'
			}
		}
	};
};