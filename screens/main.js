
import 		React 			from 'react';
import { 	Platform 	, 
			StatusBar 	, 
			View 		} 	from 'react-native';
import { 	connect 	} 	from 'react-redux';
import 		Navigation 		from '../navigations/router';
import 		styles 			from '../styles/main';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Main extends React.Component {

	render () {

		return (
			<View style = { styles ( this.props.theme ).main }>
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
