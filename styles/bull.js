
export default ( theme ) => {

	return {

		'404' 				: {
			backgroundColor : theme.base
		} ,

		button 				: {
			paddingHorizontal 	: 15
		} ,

		icon 				: {
			height 			: 32 			,
			marginLeft 		: 15 			,
			marginTop 		: 8 			,
			width 			: 32 
		} ,

		notice 				: {
			color 			: theme.body 	,
			paddingBottom 	: 15
		} ,

		rating 				: {
			color 			: theme.positive 	,
			flexDirection 	: 'row' 			,
			fontSize 		: 100 				,
			paddingBottom 	: 15 				,
			textAlign 		: 'center'
		} ,

		stripe 				: {
			backgroundColor : theme.primary
		} ,

		view 				: {
			backgroundColor 	: theme.base 	,
			borderColor 		: theme.border 	,
			borderTopWidth 		: 1 			,
			paddingBottom 		: 5 			,
			paddingHorizontal 	: 15 			,
			paddingTop 			: 15
		}
	};
};