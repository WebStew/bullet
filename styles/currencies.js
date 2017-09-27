
export default ( theme ) => {

	return {

		404 		: {

			term 	: {
				fontWeight : 'bold'
			} ,

			text 	: {
				color 		: theme.body ,
				fontSize 	: 18
			} ,

			view : {
				paddingHorizontal 	: 10 ,
				paddingVertical 	: 20
			}
		} ,

		head 	: {
			alignItems 		: 'center' 	,
			flex 			: 2 		,
			flexDirection 	: 'row' 
		} ,

		icon 	: {
			height 			: 24 	, 
			marginRight 	: 10 	,
			width 			: 24 
		} ,

		name 	: {
			flex 		: 1 ,
			fontWeight 	: 'bold'
		} ,

		price 	: {
			textAlign 	: 'right'
		} ,

		text 	: {
			textAlign 	: 'right'
		}
	};
};