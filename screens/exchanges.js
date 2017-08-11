
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	Linking 			,
			ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		scene 					from '../styles/scene';
import 		exchanges 				from '../properties/exchanges';
import 		strings 				from '../properties/strings';
import 		style 					from '../styles/list-control';
import 		color 					from '../utilities/colors';

export default connect (

	state => ({
		theme 	: state.theme
	})

) ( class Exchanges extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		return {
			title 		: strings.screens.exchanges.title ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-basket-outline'
						size 	= { 32 																	}
						color 	= { focused ? screenProps.theme.disabled : screenProps.theme.secondary 	}
					/>
				);
			}
		};
	};

	exchanges () {

		const theme = this.props.theme;

		return exchanges.map (( exchange , index ) => {

			return (
				<TouchableOpacity 
					key 	= { index 								}
					onPress = {() => Linking.openURL ( exchange.url )}
					style 	= {{
						...style ( theme ).control 						,
						...{
							backgroundColor : exchange.brand.primary 	,
							borderColor 	: color.shade ( exchange.brand.primary , -0.25 )
						}
					}}
				>
					<Text style = {{
						...style ( theme ).text ,
						...{
							color : exchange.brand.secondary
						}
					}}>
						{ exchange.name }
					</Text>
					<Ionicons
						name 	= { 'ios-arrow-forward-outline' }
						size 	= { 18 							}
						color 	= { exchange.brand.secondary 	}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.theme

		return (
			<ScrollView style = { scene ( theme ).body }>
				{ this.exchanges ()}
			</ScrollView>
		);

	}
});
