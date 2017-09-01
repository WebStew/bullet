
import 		React 							from 'react';
import { 	connect 					} 	from 'react-redux';
import { 	Keyboard 					,
			Picker 						,
			TextInput  					,
			TouchableWithoutFeedback 	,
			View 						} 	from 'react-native';
import { 	Ionicons 					} 	from '@expo/vector-icons';
import 		Loader 							from '../components/utilities/loader';
import 		Header 							from '../components/converter/header';
import 		layout 							from '../styles/layout';
import 		scene 							from '../styles/scene';
import 		style 							from '../styles/converter';
import 		analytics 						from '../utilities/analytics';

export default connect (

	state => ({
		currencies 	: state.currencies	,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Converter extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			headerTitle : <Header /> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-git-compare-outline'
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);
			} ,
			title 		: language.screens.converter.title
		};
	};

	constructor ( props ) {
		super 	( props );

		this.calculate 	= this.calculate.bind 	( this );
		this.set 		= this.set.bind 		( this );
		this.state 		= {
			base 		: '1' 		,
			from 		: 'bitcoin' ,
			result		: '1' 		,
			to 			: 'bitcoin'
		};
	}

	options () {

		const theme = this.props.theme;

		return this.props.currencies.items.map (( currency , index ) => {

			return ( 
				<Picker.Item 
					color 	= { theme.body 				}
					key 	= { index 					}
					label 	= { currency.name 			}
					value 	= { currency.id 			}
				/>
			);
		});
	}

	calculate () {

		const 	base 	= this.props.currencies.items.find (( currency ) => currency.id === this.state.from ) ,
				result 	= this.props.currencies.items.find (( currency ) => currency.id === this.state.to 	) ,
				value 	= parseFloat ( this.state.base || 0 ) * parseFloat ( base.prices.btc ) / parseFloat ( result.prices.btc );

		analytics.event 	( 
			'converter' 	, 
			'set' 			, 
			this.state.from , 
			this.state.to 
		);

		this.setState 		({
			result : value.toString ()
		});
	}

	set ( property , value ) {
		
		this.setState ({
			[ property ] : value
		} , this.calculate );
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		if ( this.props.currencies.loading ) {

			return (
				<View  style 	= { scene ( theme ).body 			}>
					<Loader 
						loading = { this.props.currencies.loading 	}
						size 	= 'large' 
						theme 	= { theme 							}
					/>
				</View>
			);
		}

		return (
			<TouchableWithoutFeedback 	onPress = { Keyboard.dismiss 		}>
				<View 					style 	= { scene 	( theme ).body 	}>
					<View 				style 	= { layout 	( theme ).fill 	}>
						<TextInput 
							defaultValue 	= { this.state.result 		}
							editable 		= { false 					}
							selectionColor 	= { theme.secondary 		}
							style 			= { style ( theme ).result 	}
						/>
					</View>

					<View 		style = { style ( theme ).pickers.view }>
						<View 	style = {{
							...style ( theme ).pickers.column ,
							...{
								marginLeft : 15
							}
						}}>
							<Picker 
								onValueChange 	= {( value ) => this.set ( 'from' , value 	)}
								selectedValue 	= { this.state.from 						}
								style 			= { style ( theme ).picker 					}>
								{ this.options ()}
							</Picker>
						</View>
						<View 	style 	= { style ( theme ).icon 		}>
							<Ionicons
								name 	= { 'ios-arrow-forward-outline' }
								size 	= { 32 							}
								color 	= { theme.secondary 			}
							/>
						</View>
						<View 	style = {{
							...style ( theme ).pickers.column ,
							...{
								marginRight : 15
							}
						}}>
							<Picker 
								onValueChange 	= {( value ) => this.set ( 'to' , value )}
								selectedValue 	= { this.state.to 						}
								style 			= { style ( theme ).picker 				}>
								{ this.options ()}
							</Picker>
						</View>
					</View>

					<View 	style 			= {{
						...layout ( theme ).center ,
						...{
							backgroundColor : theme.primary
						}}}>
						<TextInput 
							defaultValue 	= { this.state.base 						}
							keyboardType 	= 'numeric' 
							onChangeText 	= {( value ) => this.set ( 'base' , value 	)}
							selectionColor 	= { theme.secondary 						}
							style 			= { style ( theme ).input 					}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
});
