

export default ( theme ) => {

	return {

		button : {

			cta : {
				color 		: theme.secondary 	,
				fontSize 	: 14 				,
				marginRight : 15
			} ,

			column : { 
				flex 			: 1 		, 
				flexDirection 	: 'column'
			} ,

			icon : {
				borderColor 	: theme.border 	,
				borderRadius 	: 3 			,
				borderWidth 	: 1 			,
				height 			: 50 			,
				marginRight 	: 5 			,
				width 			: 50
			} ,

			label : {
				backgroundColor 	: theme.base 	,
				borderColor 		: theme.border 	,
				borderWidth 		: 1 			,
				color 				: theme.body 	,
				fontSize 			: 12 			,
				paddingHorizontal 	: 5 			,
				paddingVertical 	: 2 			,
				position 			: 'absolute' 	,
				right 				: 10 			,
				top 				: -10 			,
				zIndex 				: 1
			} ,

			title : {
				color 			: theme.body 	,
				fontSize 		: 18 			,
				fontWeight 		: 'bold' 		,
				marginBottom 	: 2 			,
				paddingTop 		: 5
			} ,

			view : {
				backgroundColor 	: theme.chrome 	,
				borderColor 		: theme.border 	,
				borderRadius 		: 5 			,
				borderWidth 		: 1 			,
				flexDirection 		: 'row' 		,
				marginBottom 		: 15 			,
				paddingLeft 		: 5 			,
				paddingRight 		: 15 			,
				paddingVertical 	: 5
			}
		}
	};
};