
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
					borderRightWidth 	: 1 					,
					borderRightColor 	: theme.accents [ 0 ] 	,
					height 				: 150 					,
					flexDirection 		: 'column'
				}
			}
		} ,

		bar : { 

			highlight : {
				backgroundColor : theme.primaries [ 2 ] ,
				width 			: 5
			} ,

			view : { 
				flex 			: 1 		, 
				flexDirection 	: 'column' 	,
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
				backgroundColor : theme.accents [ 3 ] 	,
				borderWidth 	: 1 					,
				borderColor 	: theme.accents [ 0 ] 	,
				color 			: theme.accents [ 1 ] 	,
				fontSize 		: 10 					,
				left 			: -141 					,
				paddingTop 		: 1 					,
				paddingLeft 	: 3 					,
				width 			: 152
			} ,

			view : {
				height 		: 10 		,
				transform 	: [{ 
					rotate 	: '270deg'
				}] 						,
				width 		: 10
			}
		} ,

		view : {
			borderBottomWidth 	: 1 					,
			borderBottomColor 	: theme.accents [ 0 ] 	,
			flexDirection 		: 'row' 				,
			flex 				: 1
		}
	}

};