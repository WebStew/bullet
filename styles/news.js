
import colour 	from '../utilities/colors';

export default ( theme ) => {

	return {

		date 		: {
			color 			: theme.disabled 	,
			fontSize 		: 14 				,
			marginBottom 	: 15
		} ,
		
		description : {
			color 			: theme.body 		,
			fontSize 		: 16 				,
			marginBottom 	: 13
		} ,

		icon 		: {
			flexDirection 	: 'row'
		} ,

		link 		: {
			color 			: theme.secondary 	,
			flex 			: 1 				,
			fontSize 		: 14 				,
			marginRight 	: 5 				,
			paddingTop 		: 1 				,
			textAlign 		: 'right'
		} ,

		title 		: {
			color 			: colour.shade ( theme.body , -0.25 ) 	,
			fontSize 		: 18									,
			fontWeight 		: 'bold' 								,
			marginBottom 	: 5
		} ,

		view 		: {
			padding 		: 10
		}

	};
};