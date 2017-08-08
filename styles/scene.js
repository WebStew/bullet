
import device 	from '../properties/device';
import theme 	from '../configuration/theme';

export default {

	default : {
		backgroundColor : theme.accents [ 4 ] 	,
		flex 			: 1 					,
		height 			: device.height
	} ,

	header 	: {
		backgroundColor : theme.accents [ 3 ]
	}
};
