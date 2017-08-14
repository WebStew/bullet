
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		actions 				from '../actions/theme';
import 		strings 				from '../properties/strings';
import 		themes 					from '../properties/themes';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';

export default connect (

	state => ({
		theme : state.theme
	})

) ( class Theme extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const theme = screenProps.theme;

		return {
			title 		: strings.screens.theme.title ,		
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { strings.actions.return 	}
			/>
		};
	};

	themes () {

		const current = this.props.theme;

		return Object.keys ( themes ).map (( theme , index ) => {

			const 	icon 		= themes [ theme ].id 	=== current.id 	? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline' ,
					background 	= index % 2 			=== 0 			? current.primary 				: current.base;

			return (
				<TouchableOpacity 
					key 	= { index 												}
					onPress = {() => {
						this.props.dispatch ( actions.save ( themes[ theme ].id 	))
					}}
					style 	= {{
						...style ( current ).control 					,
						...{
							backgroundColor 	: background 
							// backgroundColor 	: themes [ theme ].chrome 	,
							// borderColor 		: themes [ theme ].chrome
						}
					}}
				>
					<Text style = { style ( current ).text }>
						{ themes [ theme ].name }
					</Text>
					<Ionicons
						name 	= { icon 				}
						size 	= { 18 					}
						color 	= { current.secondary 	}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.theme;

		return (
			<ScrollView style = { scene ( theme ).body }>
				{ this.themes ()}
			</ScrollView>
		);
	}
});
