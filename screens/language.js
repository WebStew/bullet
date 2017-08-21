
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		actions 				from '../actions/language';
import 		languages 				from '../properties/languages';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';
import 		strings					from '../utilities/string';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Language extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const language 	= screenProps.language;

		return {
			title 		: strings.capitalise ( language.screens.language.title ) ,
			headerLeft 	: <Back 
				press 		= {() => {
					
					analytics.event 	( 'languages' , 'navigate' , 'back' );
					navigation.goBack 	()
				}}
				value 		= { language.actions.return 	}
			/>
		};
	};

	languages () {

		const 	current = this.props.language ,
				theme 	= this.props.theme;

		return Object.keys ( languages ).map (( language , index ) => {

			const 	icon 		= language 	=== current.id 	? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline' ,
					background 	= index % 2 === 0 			? theme.primary 				: theme.base;

			return (
				<TouchableOpacity 
					key 	= { index 	}
					onPress = {() => 	{
						
						analytics.event 	( 'languages' , 'set' , language 	);
						this.props.dispatch ( actions.save ( language 			));
					}}
					style 	= {{
						...style ( theme ).control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { style ( theme ).text 			}>
						{ languages [ language ].names [ current.id ]}
					</Text>
					<Ionicons
						name 	= { icon 							}
						size 	= { 18 								}
						color 	= { theme.secondary 				}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.theme;

		analytics.screen 	( 'languages:200' 			);
		return 				(
			<ScrollView style = { scene ( theme ).body 	}>
				{ this.languages ()}
			</ScrollView>
		);

	}
});
