
import 		React 			from 'react';
import { 	Platform 	, 
			StatusBar 	, 
			View 		} 	from 'react-native';
import { 	Provider 	} 	from 'react-redux';
import { 	AppLoading 	} 	from 'expo';
import { 	Ionicons 	} 	from '@expo/vector-icons';
import 		theme 			from './actions/theme';
import 		configuration 	from './configuration/store';
import 		Navigation 		from './navigations/router';
import 		strings 		from './properties/strings';
import 		styles 			from './styles/main';
import 		cache 			from './utilities/cache';

const store = configuration ();

export default class Application extends React.Component {

	state = {
		cache : false ,
		theme : store.getState ().theme
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
					<View style = { styles ( this.state.theme ).main }>
						{ Platform.OS === 'ios' 	&& <StatusBar 	barStyle 	= 'default' 								/> }
						{ Platform.OS === 'android' && <View 		style 		= { styles ( this.state.theme ).statusbar } /> }
						<Navigation 
							screenProps = {{
								theme : this.state.theme 						
							}} 
						/>
					</View>
				</Provider>
			);
		} 
		
		else {

			return <AppLoading />;
		}
	}
};
