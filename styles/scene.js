
import device 	from '../properties/device';

export default ( theme ) => {

	return {

		body : {
			backgroundColor : theme.base 	,
			flex 			: 1 			,
			height 			: device.height
		} ,

		header 	: {
			backgroundColor : theme.primary
		}
	};
};
