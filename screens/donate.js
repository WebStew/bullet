
import 		React 					from 'react';
import { 	Clipboard 			,
			Linking 			,
			ScrollView 			,
			TouchableOpacity 	,
			Text 				,
			View 				} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		Button 					from '../components/utilities/button';
import 		Code 					from '../components/utilities/code';
import 		Heading 				from '../components/utilities/headings';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/help';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Donate extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	, 
				theme 		= screenProps.theme 	;

		return {
			title 		: language.screens.donate.title ,
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	wallets () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		return language.screens.donate.wallets.map (( wallet , index ) => {

			const label = language.screens.donate.action.replace ( '{{placeholder}}' , wallet.name );

			return (
				<View key = { index }>
					<Heading 
						theme 	= { theme 		}
						title 	= { wallet.name } 
						type 	= { 2 			}
					/>
					<Code 
						theme 	= { theme 		}
						value 	= { wallet.id 	} 
					/>
					<Button 
						key 	= { index }
						press 	= {() => {
							
							analytics.event 	( 'wallet' , 'copy' , wallet.name 	);
							Clipboard.setString ( wallet.id 						);
						}}
						theme 	= { theme }
						value 	= { label }
					/>
				</View>
			);
		});
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		,
				appearance 	= style ( theme ) 		;
				
		return (
			<ScrollView style 	= { scenery.body 					}>
				<Heading 
					theme 		= { theme 							}
					title 		= { language.screens.donate.title 	}
					type 		= { 1 								}
				/>
				<View 	style 	= { appearance.body 				}>
					<Text style = { appearance.text 				}>
						{ language.screens.donate.body 				}
					</Text>
					{ this.wallets ()}
				</View>
			</ScrollView>
		);
	}
});
