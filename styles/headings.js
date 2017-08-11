
import colour 	from '../utilities/colors';

export default ( theme ) => {

	return {

		// H1
		1 : {
			color 				: colour.shade ( theme.body , -0.25 ) 	,
			fontSize 			: 21 									,
			fontWeight 			: 'bold' 								,
			paddingHorizontal 	: 15 									,
			paddingVertical 	: 12

		} ,

		// H2
		2 : {

			color 			: colour.shade ( theme.body , -0.25 ) 		,
			fontSize 		: 18 										,
			fontWeight 		: 'bold' 									,
			marginBottom 	: 12
			
		}
	};

};