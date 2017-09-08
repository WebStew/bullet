
import device from '../properties/device';

const height = Math.round ( device.height / 3 ) + 8;

export default ( theme ) => {

	return {

		tree : {

			axis : {

				y : {

					cell : {
						flex 			: 1 		,
						flexDirection 	: 'column' 	,
						justifyContent 	: 'center'
					} ,

					text : {
						color 		: theme.body 	,
						fontSize 	: 10 			,
						padding  	: 2 			,
						textAlign 	: 'right'
					} ,

					view : {
						borderColor 		: theme.border 	,
						borderBottomWidth 	: 1 			,
						borderRightWidth 	: 1 			,
						borderTopWidth 		: 1 			,
						height 				: height 		,
						flexDirection 		: 'column'
					}
				}
			} ,

			bar : { 

				highlight : {
					backgroundColor 	: theme.primary ,
					borderColor 		: theme.border 	,
					borderRadius 		: 5 			,
					borderWidth 		: 1 			,
					width 				: 10
				} ,

				view : {
					borderBottomWidth 	: 1 			,
					borderColor 		: theme.border 	,
					borderTopWidth 		: 1 			,
					flex 				: 1 			, 
					flexDirection 		: 'column' 		,
					justifyContent 		: 'flex-end' 	,
					paddingHorizontal 	: 1 			,
					paddingVertical 	: 2
				}
			} ,

			chart : {
				flex 	: 1 , 
				height 	: height
			} ,

			loading : { 
				flex 			: 1 		, 
				flexDirection 	: 'column'	, 
				height 			: height	,
				justifyContent 	: 'center' 	,
				paddingVertical : 15
			} ,

			section : {

				text : {
					color 			: theme.body 						,
					bottom 			: - ( Math.round ( height / 2.3 )) ,
					fontSize 		: 14 								,
					fontWeight 		: 'bold' 							,
					left 			: - ( Math.round ( height / 2.225 )) ,
					transform 		: [{ 
						rotate 		: '270deg'
					}] 													,
					width 			: height
				} ,

				view : {
					backgroundColor 	: theme.primary ,
					borderLeftWidth 	: 1 			,
					borderRightWidth 	: 1 			,
					borderColor 		: theme.border 	,
					height 				: height 		,
					width 				: 25
				}
			} ,

			view : {
				flexDirection 	: 'row' ,
				flex 			: 1
			}
		}
	};
};