
import device 	from '../properties/device';
import theme 	from '../configuration/palette';

export default {

	default : {
		backgroundColor : theme.base 	,
		flex 			: 1 			,
		height 			: device.height
	} ,

	header 	: {
		backgroundColor : theme.primary
	}
};
