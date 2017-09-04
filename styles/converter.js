
export default ( theme ) => {

	return {

		icon 	: {
			backgroundColor : theme.primary ,
			flexDirection 	: 'column' 		,
			justifyContent 	: 'center' 		, 
			paddingLeft 	: 7 			, 
			paddingRight 	: 5
		} ,
	
		input 	: {
			backgroundColor 	: theme.base 	,
			borderColor 		: theme.border 	,
			borderRadius 		: 5 			,
			borderWidth 		: 1 			,
			color 				: theme.body 	,
			height 				: 40 			,
			fontSize 			: 24 			,
			marginHorizontal 	: 15 			,
			paddingHorizontal 	: 5 			,
			textAlign 			: 'center'
		} ,

		picker 	: {
			borderWidth 	: 0
		} ,

		pickers : {

			column : {
				backgroundColor : theme.base 	,
				borderColor 	: theme.border 	,
				borderRadius 	: 5 			,
				borderWidth 	: 1 			,
				flex 			: 1 			,
				flexDirection 	: 'column' 		,
				justifyContent 	: 'center'
			} ,

			view : {
				backgroundColor : theme.primary ,
				flex 			: 2 			,
				flexDirection 	: 'row'
			}
		} ,

		result : {
			backgroundColor : theme.primary 	,
			borderWidth 	: 0 				,
			color 			: theme.disabled 	,
			flex 			: 1 				,
			fontSize 		: 24 				,
			height 			: 40 				,
			textAlign 		: 'center'
		} 
	};
};