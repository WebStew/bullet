
import 		React 							from 'react';
import { 	connect 					} 	from 'react-redux';
import { 	Keyboard 					,
			Picker 						,
			TextInput  					,
			TouchableWithoutFeedback 	,
			View 						} 	from 'react-native';
import { 	Ionicons 					} 	from '@expo/vector-icons';
import 		Error 					from '../components/errors/ajax';
import 		Loader 							from '../components/utilities/loader';
import 		Header 							from '../components/converter/header';
import 		layout 							from '../styles/layout';
import 		scene 							from '../styles/scene';
import 		style 							from '../styles/converter';
import 		actions 						from '../actions/currencies';
import 		api 							from '../api/currencies';
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
						name 	= 'ios-calculator-outline'
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
		this.refresh 	= this.refresh.bind 	( this );
		this.state 		= {
			base 		: '1' 		,
			from 		: 'bitcoin' ,
			result		: '1' 		,
			to 			: 'bitcoin'
		};
	}

	refresh () {
		
		if ( this.props.currencies.items.length > api.limit ) {

			analytics.event 	( 
				'converter' 	, 
				'refresh' 		, 
				'stream' 		, 
				'user' 	
			);
			this.props.dispatch ( actions.stream ());
		}

		else {
			
			analytics.event 	( 
				'converter' 	, 
				'refresh' 		, 
				'get' 			,
				'user' 		
			);
			this.props.dispatch ( actions.get ());
		}
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
				theme 		= this.props.theme 		,
				appearance 	= style 	( theme ) 	,
				scenery 	= scene 	( theme ) 	,
				arrange 	= layout 	( theme ) 	;

		if ( this.props.currencies.loading ) {

			return (
				<View  style 	= { scenery.body 					}>
					<Loader 
						loading = { this.props.currencies.loading 	}
						size 	= 'large' 
						theme 	= { theme 							}
					/>
				</View>
			);
		}

		if ( this.props.currencies.error ) {
			
			analytics.screen 	( 'converter:500' 				);
			return 				(
				<Error 
					error 		= { this.props.currencies.error }
					language 	= { language 					}
					press 		= { this.refresh 				}
					theme 		= { theme 						}
					text 		= { language.errors.ajax 		}
				/>
			);
		}

		return (
			<TouchableWithoutFeedback 	onPress = { Keyboard.dismiss 	}>
				<View 					style 	= { scenery.body 		}>
					<View 				style 	= { arrange.fill 		}>
						<TextInput 
							defaultValue 	= { this.state.result 		}
							editable 		= { false 					}
							selectionColor 	= { theme.secondary 		}
							style 			= { appearance.result 		}
						/>
					</View>

					<View 		style = { appearance.pickers.view }>
						<View 	style = {{
							...appearance.pickers.column ,
							...{
								marginLeft : 15
							}
						}}>
							<Picker 
								onValueChange 	= {( value ) => this.set ( 'from' , value 	)}
								selectedValue 	= { this.state.from 						}
								style 			= { appearance.picker 						}>
								{ this.options ()}
							</Picker>
						</View>
						<View 	style 	= { appearance.icon 			}>
							<Ionicons
								name 	= { 'ios-arrow-forward-outline' }
								size 	= { 32 							}
								color 	= { theme.secondary 			}
							/>
						</View>
						<View 	style = {{
							...appearance.pickers.column ,
							...{
								marginRight : 15
							}
						}}>
							<Picker 
								onValueChange 	= {( value ) => this.set ( 'to' , value )}
								selectedValue 	= { this.state.to 						}
								style 			= { appearance.picker 					}>
								{ this.options ()}
							</Picker>
						</View>
					</View>

					<View style = {{
						...arrange.center ,
						...{
							backgroundColor : theme.primary
						}}}>
						<TextInput 
							value 			= { this.state.base 						}
							keyboardType 	= 'numeric' 
							onChangeText 	= {( value ) => this.set ( 'base' , value 	)}
							selectionColor 	= { theme.secondary 						}
							style 			= { appearance.input 						}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
});
