
import 		React 			from 'react';
import { 	Platform 	, 
			StatusBar 	, 
			View 		} 	from 'react-native';
import { 	connect 	} 	from 'react-redux';
import 		Navigation 		from '../navigations/router';
import 		styles 			from '../styles/main';
import 		analytics 		from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Main extends React.Component {

	constructor ( props ) {
		super 	( props );

		// Only fire the application load data once
		analytics.screen ( 'application:200' );
	}

	componentWillMount () {

		// Everytime a theme or language is change update the hit data
		analytics.dimension ( 'language' 	, this.props.language 	);
		analytics.dimension ( 'theme' 		, this.props.theme 		);
	}

	render () {

		analytics.screen 	( 'main:200' );
		return 				(
			<View style = { styles ( this.props.theme ).main 	}>
				{ Platform.OS === 'ios' 	&& <StatusBar 	barStyle 	= 'default' 								/> }
				{ Platform.OS === 'android' && <View 		style 		= { styles ( this.props.theme ).statusbar } /> }
				<Navigation 
					screenProps = {{
						language 	: this.props.language ,
						theme 		: this.props.theme
					}} 
				/>
			</View>
		);
	}
});
