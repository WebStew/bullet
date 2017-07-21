
import theme from './theme';

export default {

	tree : {

		axis : {

			y : {

				cell : {
					flex 			: 1 		,
					flexDirection 	: 'column' 	,
					justifyContent : 'center'
				} ,

				text : {
					color 		: theme.accents [ 1 ] 	,
					fontSize 	: 10 					,
					padding  	: 2 					,
					textAlign 	: 'right'
				} ,

				view : {
					borderColor 		: theme.accents [ 0 ] 	,
					borderBottomWidth 	: 1 					,
					borderRightWidth 	: 1 					,
					borderTopWidth 		: 1 					,
					height 				: 150 					,
					flexDirection 		: 'column'
				}
			}
		} ,

		bar : { 

			highlight : {
				backgroundColor 	: theme.primaries [ 2 ] ,
				borderColor 		: theme.accents [ 0 ] 	,
				borderBottomWidth 	: 1 					,
				width 				: 5
			} ,

			view : {
				borderColor 	: theme.accents [ 0 ] 	,
				borderTopWidth 	: 1 					,
				flex 			: 1 					, 
				flexDirection 	: 'column' 				,
				justifyContent 	: 'flex-end'
			}
		} ,

		chart : {
			flex 	: 1 , 
			height 	: 150
		} ,

		loading : { 
			flex 			: 1 		, 
			flexDirection 	: 'column'		, 
			height 			: 150 		,
			justifyContent 	: 'center' 	,
			paddingVertical : 15
		} ,

		section : {

			text : {
				color 			: theme.accents [ 1 ] 	,
				bottom 			: -65 					,
				fontSize 		: 10 					,
				left 			: -68 					,
				transform 	: [{ 
					rotate 	: '270deg'
				}] ,
				width : 150
			} ,

			view : {
				backgroundColor 	: theme.accents [ 3 ] 	,
				borderLeftWidth 	: 1 					,
				borderRightWidth 	: 1 					,
				borderColor 		: theme.accents [ 0 ] 	,
				height 				: 150 					,
				width 				: 16
			}
		} ,

		view : {
			flexDirection 	: 'row' 				,
			flex 			: 1
		}
	}

};