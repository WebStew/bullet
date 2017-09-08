
import color from '../utilities/colors'

const 	common 	= {

		text 	: {
			fontSize 	: 18 	,
			fontWeight 	: 'bold'
		} ,

		view 	: {
			alignItems 			: 'center'	,
			borderRadius 		: 5 		,
			borderWidth 		: 1 		,
			marginBottom 		: 15 		,
			paddingHorizontal 	: 15 		,
			paddingVertical 	: 10
		}
	};	

export default ( theme ) => {

	return {
		
		primary : {

			text : {
				...{
					color : theme.chrome
				} ,
				...common.text
			} ,

			view : {
				...{
					backgroundColor : theme.secondary ,
					borderColor 	: color.shade ( theme.secondary , -0.5 )
				} ,
				...common.view
			}
		} ,

		secondary : {
			
			text : {
				...{
					color : theme.body
				} ,
				...common.text
			} ,

			view : {
				...{
					backgroundColor : theme.primary ,
					borderColor 	: color.shade ( theme.primary , -0.5 )
				} ,
				...common.view
			}
		} ,

		tertiary : {
			
			text : {
				...{
					color : theme.body
				} ,
				...common.text
			} ,

			view : {
				...{
					backgroundColor : theme.negative ,
					borderColor 	: color.shade ( theme.negative , -0.5 )
				} ,
				...common.view
			}
		}
	};
};