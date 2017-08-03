
import 		React 					from 'react';
import { 	Linking 			,
			ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		scene 					from '../styles/scene';
import 		exchanges 				from '../properties/exchanges';
import 		strings 				from '../properties/strings';
import 		style 					from '../styles/exchanges';
import 		color 					from '../utilities/colors';

export default class Exchanges extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title 		: strings.screens.exchanges.title
	});

	exchanges () {

		return exchanges.map (( exchange , index ) => {

			return (
				<TouchableOpacity 
					key 	= { index 								}
					onPress = {() => Linking.openURL ( exchange.url )}
					style 	= {{
						...style.control ,
						...{
							backgroundColor : exchange.brand.primary ,
							borderColor 	: color.shade ( exchange.brand.primary , -0.25 )
						}
					}}
				>
					<Text style = {{
						...style.text ,
						...{
							color : exchange.brand.secondary
						}
					}}>
						{ exchange.name }
					</Text>
					<Ionicons
						name 	= { 'ios-arrow-forward-outline' }
						size 	= { 24 							}
						color 	= { exchange.brand.secondary 	}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		return (
			<ScrollView style 	= { scene.default }>
				{ this.exchanges ()}
			</ScrollView>
		);

	}
};
