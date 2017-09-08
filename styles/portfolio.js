
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

		missing : {

			icon 	: {
				marginLeft 	: 15 , 
				marginTop 	: 2 
			} ,

			row 	: { 
				alignItems 		: 'center' 	,
				flexDirection 	: 'row' 	, 
				justifyContent 	: 'center'
			} ,

			text 	: {
				color 		: theme.body 	,
				flex 		: 1 			,
				fontSize 	: 14
			} ,

			view 	: { 
				alignItems 			: 'center' 	,
				flexDirection 		: 'row' 	, 
				justifyContent 		: 'center' 	,
				paddingHorizontal 	: 10 
			}
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
				textAlign 			: 'right'
			} ,

			head : {
				color 				: theme.body 	, 
				flex 				: 1 			, 
				fontSize 			: 14 			, 
				fontWeight 			: 'bold' 		, 
				paddingLeft 		: 20 
			} ,

			view : {
				backgroundColor 	: theme.chrome 	,
				borderTopColor 		: theme.border 	,
				borderTopWidth 		: 1 			,
				paddingHorizontal 	: 10 			,
				paddingVertical 	: 15 			,
				flexDirection 		: 'row'
			}
		}
	};
};