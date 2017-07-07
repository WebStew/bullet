
import 		React 			from 'react';
import { 	Platform 	, 
			StatusBar 	, 
			View 		} 	from 'react-native';

import { 	Provider 	} 	from 'react-redux';

import { 	AppLoading 	} 	from 'expo';
import { 	Ionicons } 		from '@expo/vector-icons';
import 		Navigation 		from './navigations/root';
import 		cache 			from './utilities/cache';
import 		strings 		from './properties/strings';
import 		styles 			from './styles/main';
import 		configuration 	from './configuration/store';

const store = configuration ();

export default class Application extends React.Component {

	state = {
		ready: false,
	};

	async setCache () {

		try {

			await cache.assets ({

				images 	: [] ,
				fonts 	: [
					Ionicons.font ,
					{ 
						'space-mono' : require ( './assets/fonts/SpaceMono-Regular.ttf' )
					}
				]
			});

		} 
		
		catch ( error ) {

			console.warn 	( strings.development.cache );
			console.log 	( error.message 				);

		} 
		
		finally {

			this.setState ({
				ready : true
			});
		
		}
		
	}

	componentWillMount () {

		this.setCache ();
	}

	render () {

		if ( this.state.ready ) {

			return (
				
				<Provider store = { store }>
					<View style = { styles.main }>
						{ Platform.OS === 'ios' 	&& <StatusBar 	barStyle 	= 'default' 			/> }
						{ Platform.OS === 'android' && <View 		style 		= { styles.statusbar } 	/> }
						<Navigation />
					</View>
				</Provider>
			);
		} 
		
		else {

			return <AppLoading />;
		}
	}
}
