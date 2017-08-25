
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		actions 				from '../actions/theme';
import 		themes 					from '../properties/themes';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';
import 		strings					from '../utilities/string';
import 		analytics 				from '../utilities/analytics';


export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Themes extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language , 
				theme 		= screenProps.theme 	;

		return {
			title 		: strings.capitalise ( language.screens.theme.title ) ,	
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	themes () {

		const 	current 	= this.props.theme ,
				language 	= this.props.language;

		return Object.keys ( themes ).map (( theme , index ) => {

			const 	icon 		= theme 	=== current.id 	? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline' ,
					background 	= index % 2 === 0 			? current.primary 				: current.base;

			return (
				<TouchableOpacity 
					key 	= { index 	}
					onPress = {() => 	{
						
						analytics.event 	( 'themes' , 'set' , theme 	);
						this.props.dispatch ( actions.save ( theme 		));
					}}
					style 	= {{
						...style ( current ).control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { style ( current ).text 		}>
						{ themes [ theme ].names [ language.id 	]}
					</Text>
					<Ionicons
						name 	= { icon 						}
						size 	= { 18 							}
						color 	= { current.loader 				}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.theme;

		return 				(
			<ScrollView style = { scene ( theme ).body }>
				{ this.themes ()}
			</ScrollView>
		);
	}
});
