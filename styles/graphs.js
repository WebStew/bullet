
import theme from './theme';

export default {

	tree : {
		
		align : {
			alignItems : 'flex-end'
		} ,

		axis : {

			y : {

				cell : {
					flex 			: 1 ,
					flexDirection 	: 'column'
				} ,

				text : {
					fontSize 	: 10 	,
					padding  	: 2 	,
					textAlign 	: 'right'
				} ,

				view : {
					borderRightWidth 	: 1 					,
					borderRightColor 	: theme.accents [ 0 ] 	,
					flexDirection 		: 'column'				,
				}
			}
		} ,

		bar : { 
			backgroundColor : theme.primaries [ 2 ] ,
			width 			: 4
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
		}
	}

};