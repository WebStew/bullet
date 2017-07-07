
import { 	Image 	} from 'react-native';
import { 	Asset 	, 
			Font 	} from 'expo';


const cache = {

	fonts ( fonts ) {

		return fonts.map ( font => Font.loadAsync ( font ));
	} ,
	
	images ( images ) {

		return images.map ( image => {

			if ( typeof image === 'string' ) {

				return Image.prefetch ( image );
			} 
			
			else {

				return Asset.fromModule ( image ).downloadAsync ();
			}
		});
	}
}

export default {
	
	assets ({ 
		images 	= [] , 
		fonts 	= [] 
	}) {

		return Promise.all ([
			...cache.images ( images 	) , 
			...cache.fonts 	( fonts 	)
		]);
	}
	
};
