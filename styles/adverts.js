

export default ( theme ) => {

	return {

		body : {
			marginBottom 		: 5 			,
			paddingBottom 		: 5 			,
			paddingHorizontal 	: 15
		} ,

		button : {

			cta : {
				color 		: theme.secondary 	,
				fontSize 	: 14 				,
				marginRight : 15
			} ,

			column : { 
				flex 			: 1 			,
				flexDirection 	: 'column'
			} ,
			
			content : {
				backgroundColor 	: theme.chrome 	,
				borderColor 		: theme.border 	,
				borderRadius 		: 5 			,
				borderWidth 		: 1 			,
				flexDirection 		: 'row' 		,
				padding 			: 5
			} ,

			description : {
				color 			: theme.body 	,
				flex 			: 1 			,
				fontSize 		: 14 			,
				marginBottom 	: 4
			} ,

			icon : {
				borderColor 	: theme.border 	,
				borderWidth 	: 1 			,
				height 			: 70 			,
				marginRight 	: 5 			,
				borderRadius 	: 5 			,
				width 			: 70
			} ,

			label : {
				color 			: theme.body 	,
				fontSize 		: 12 			,
				marginBottom 	: 5 			,
				marginRight 	: 5 			,
				textAlign 		: 'right'
			} ,

			title : {
				color 			: theme.body 	,
				flex 			: 1 			,
				fontSize 		: 18 			,
				fontWeight 		: 'bold' 		,
				marginBottom 	: 3 			,
				paddingTop 		: 1
			} ,

			view : {
				flexDirection 	: 'column' ,
				marginBottom 	: 10
			}
		}
	};
};