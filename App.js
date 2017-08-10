
import 		React 			from 'react';
import { 	Provider 	} 	from 'react-redux';
import { 	AppLoading 	} 	from 'expo';
import { 	Ionicons 	} 	from '@expo/vector-icons';
import 		Main 			from './screens/main';
import 		theme 			from './actions/theme';
import 		configuration 	from './configuration/store';
import 		cache 			from './utilities/cache';
import 		strings 		from './properties/strings';

const store = configuration ();

export default class Application extends React.Component {

	state = {
		cache : false
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
			console.log 	( error.message 			);

		} 
		
		finally {

			this.setState ({
				cache : true
			});
		
		}
		
	}

	componentWillMount () {

		this.setCache 	();
		store.dispatch 	( theme.get ())
	}

	render () {

		if ( this.state.cache ) {

			return (
				
				<Provider store = { store }>
					<Main />
				</Provider>
			);
		} 
		
		else {

			return <AppLoading />;
		}
	}
};
