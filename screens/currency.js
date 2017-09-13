
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		currencies 				from '../properties/currencies.js';
import 		style 					from '../styles/list-control';
import 		scene 					from '../styles/scene';
import 		strings 				from '../utilities/string';
import 		actions 				from '../actions/currency';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		currency 	: state.currency ,
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Currency extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()}
				value 	= { language.actions.return }
			/> ,
			title 		: strings.capitalise ( language.screens.currency.title )
		};
	};

	currencies () {
		
		const 	current 	= this.props.currency 	,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				appearance 	= style ( theme ) 		;

		return currencies.map (( currency , index ) => {

			const 	icon 		= currency.id 	=== current.id 	? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline' ,
					background 	= index % 2 	=== 0 			? theme.primary 				: theme.base;

			return (
				<TouchableOpacity 
					key 	= { index 	}
					onPress = {() => 	{
						
						analytics.event 	( 'currency' , 'set' , currency.names [ 'en' 	]);
						this.props.dispatch ( actions.save ( currency.id 					));
					}}
					style 	= {{
						...appearance.control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { appearance.text 	}>
						{ currency.names [ language.id ]}
					</Text>
					<Ionicons
						name 	= { icon 				}
						size 	= { 18 					}
						color 	= { theme.loader 		}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const 	theme 	= this.props.theme 	,
				scenery = scene ( theme ) 	;

		return 				(
			<ScrollView style = { scenery.body }>
				{ this.currencies ()}
			</ScrollView>
		);
	}
});
