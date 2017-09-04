
import color from '../utilities/colors'

export default ( theme ) => {

	return {
		
		primary : {

			text : {
				color 		: theme.chrome 	,
				fontSize 	: 18 			,
				fontWeight 	: 'bold'
			} ,

			view : {
				alignItems 			: 'center' 									,
				backgroundColor 	: theme.secondary 							,
				borderColor 		: color.shade ( theme.secondary , -0.25 ) 	,
				borderRadius 		: 5 										,
				borderWidth 		: 1 										,
				marginBottom 		: 15 										,
				paddingHorizontal 	: 15 										,
				paddingVertical 	: 10

			}
		} ,

		secondary : {
			
			text : {
				color 		: theme.body 	,
				fontSize 	: 18 			,
				fontWeight 	: 'bold'
			} ,

			view : {
				alignItems 			: 'center' 								,
				backgroundColor 	: theme.primary 						,
				borderColor 		: color.shade ( theme.primary , -0.25 ) 	,
				borderRadius 		: 5 									,
				borderWidth 		: 1 									,
				marginBottom 		: 15 									,
				paddingHorizontal 	: 15 									,
				paddingVertical 	: 10

			}
		}
	};
};