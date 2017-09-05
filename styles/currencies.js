
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
			flex 			: 2 	,
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

		price 	: {
			textAlign 	: 'right'
		} ,

		text 	: {
			textAlign 	: 'right'
		}
	};
};