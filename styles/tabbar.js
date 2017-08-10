
export default ( theme ) => {

	return {

		tabBar 				: {
			borderTopWidth 	: 1 			,
			borderTopColor 	: theme.border 	,
			backgroundColor : theme.chrome 	,
			flexDirection 	: 'row' 		,
			height 			: 49
		} 									,
		tab 				: {
			alignItems 		: 'stretch' 	,
			flex 			: 1 			,
			justifyContent 	: 'flex-end'
		} 									,
		icon 				: {
			flexGrow 		: 1
		} 									,
		label 				: {
			backgroundColor : 'transparent' ,
			fontSize 		: 10 			,
			marginBottom 	: 1.5 			,
			textAlign 		: 'center'
		}
	}

};
