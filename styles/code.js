
export default ( theme ) => {

	return {
		text : {
			color 			: theme.body 	,
			fontFamily 		: 'space-mono' 	,
			fontSize 		: 12
		} ,

		view : {
			borderColor 	: theme.border 	, 
			borderRadius 	: 5 			,
			borderStyle 	: 'dotted' 		,
			borderWidth 	: 1 			,
			marginBottom 	: 15 			,
			padding 		: 10
		}
	};
};