
export default ( theme ) => {

	return {

		body : {
			borderColor 		: theme.border 	,
			borderBottomWidth 	: 1 			,
			padding 			: 15
		} ,

		row 	: {
			color 				: theme.body 	,
			paddingBottom 		: 3
		} ,

		stripe 	: {
			backgroundColor 	: theme.primary
		} ,

		view 	: {
			borderTopColor 		: theme.border 	,
			borderTopWidth 		: 1
		}
	};
};