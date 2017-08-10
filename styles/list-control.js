
export default ( theme ) => {

	return {

		control : {
			borderColor 		: theme.border 			,
			borderWidth 		: 1 					,
			borderTopWidth 		: 0 					,
			flex 				: 1 					,
			flexDirection 		: 'row' 				,
			justifyContent 		: 'space-between' 		,
			paddingHorizontal 	: 15 					,
			paddingVertical 	: 15
		} ,

		text 	: {
			color 				: theme.body 			,
			fontSize 			: 16
		}
	};
};