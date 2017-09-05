
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';

import 		Error 					from '../components/errors/ajax';
import 		Item 					from '../components/portfolio/item';
import 		List 					from '../components/utilities/list';
import 		Loader 					from '../components/utilities/loader';
import 		Header 					from '../components/portfolio/header';
import 		actions 				from '../actions/currencies';
import 		portfolio 				from '../actions/portfolio';
import 		api 					from '../api/currencies';
import 		list 					from '../styles/list';
import 		style 					from '../styles/portfolio';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		numbers 				from '../utilities/numbers';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		currencies 	: state.currencies 	,
		portfolio 	: state.portfolio 	,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Portfolio extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 	,
				theme 		= screenProps.theme 	;

		return {
			headerTitle : <Header 		/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-briefcase-outline'
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);
			} ,
			title 		: language.screens.portfolio.title
		};
	};

	constructor ( props ) {
		super 	( props );

		this.header 	= this.header.bind 		( this );
		this.refresh 	= this.refresh.bind 	( this );
		this.remove 	= this.remove.bind 		( this );
		this.row 		= this.row.bind 		( this );
		this.separator 	= this.separator.bind 	( this );
	}

	headers () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				items 		= list 	( theme ) 		,
				appearance 	= style ( theme ) 		;

		return [{
			press 		: () => {} , 
			styles 		: {
				text 	: items [ 'head-text' ] ,
				touch 	: items.cell
			} ,
			text 		: language.screens.portfolio.headers.name
		} ,
		{
			press 		: () => {} , 
			styles 		: {
				text 	: { 
					...items [ 'head-text' ] ,
					...appearance.cell
				} ,
				touch 	: items.cell
			} ,
			text 		: language.screens.portfolio.headers.amount
		} ,
		{
			press 		: () => {} , 
			styles 		: {
				text 	: { 
					...items [ 'head-text' ] ,
					...appearance.cell
				} ,
				touch 	: items.cell
			} ,
			text 		: language.screens.portfolio.headers.price
		} ,
		{
			press 		: () => {} , 
			styles 		: {
				text 	: { 
					...items [ 'head-text' ] ,
					...appearance.cell
				} ,
				touch 	: items.cell
			} ,
			text 		: language.screens.portfolio.headers.total
		}];
	}

	cells () {
		
		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		return this.headers ().map (( item , index ) => {

			const styles = index === 0 ? 	{
				...item.styles.touch 		,
				...appearance.head 
			} : item.styles.touch;

			return (
				<TouchableOpacity 
					key 			= { index 					}
					onPress 		= { item.press.bind ( this )}
					style 			= { styles 					}
				>
					<Text  
						numberOfLines 	= { 1 					} 
						style 			= {{
							...item.styles.text ,
							...{
								color : theme.disabled
							}
						}}>
						{ item.text }
					</Text>
				</TouchableOpacity>
			);
		});
	}

	header () {

		const 	theme = this.props.theme 	,
				items = list ( theme ) 		;
	
		if (
			this.props.currencies.error 				|| 
			this.props.currencies.items.length	=== 0 	|| 
			this.props.portfolio.items.length 	=== 0 
		) {
			
			return null;
		}

		return (
			<View>
				<View 
					style = {{ 
						...items.row , 
						...items.head 
					}}
				>
					{ this.cells ()}
				</View>
			</View>
		);
	}

	remove ( id ) {

		this.props.dispatch ( portfolio.delete ( id ));
	}

	refresh () {
			
		analytics.event ( 
			'portfolio' , 
			'refresh' 	, 
			'stream' 	,
			'user' 		
		);
		this.props.dispatch ( actions.stream ());
	}

	row ( currency , section , row , highlight ) {
		
		const 	theme 		= this.props.theme 															,
				language 	= this.props.language 														,
				styles 		= row % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary 	,
				data 		= this.props.currencies.items.find (( item ) => item.id === currency.id ) 	,
				details 	= data ? {
					amount 	: currency.amount 	,
					id 		: data.id 			,
					name 	: data.name 		,
					price 	: data.prices.usd 	,
					total 	: parseFloat ( currency.amount ) * parseFloat ( data.prices.usd )
				} 			: undefined ,
				appearance 	= style ( theme );

		// We unable to find the currency in the loaded results perhaps because it is outside the top 100
		// Potentially the save currency no longers exists
		// User has option to load the entire data set or remove it from their portfolio
		if ( ! details ) {

			return (
				<View 		style 	= { appearance.missing.view 	}>
					<Text 	
						ellipsizeMode 	= 'tail'
						numberOfLines 	= { 1 						}
						style 			= { appearance.missing.text }
						>
						{ currency.name } { language.errors [ '500' ]}
					</Text>
					<View 	style 	= { appearance.missing.row 		}>
						<TouchableOpacity 
							onPress = { this.refresh 				}
							style 	= { appearance.missing.icon 	}
						>
							<Ionicons
								name 	= 'ios-refresh-outline'
								size 	= { 32 					}
								color 	= { theme.secondary 	}
							/>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress = {() => this.remove ( currency.id )}
							style 	= { appearance.missing.icon 		}
						>
							<Ionicons
								name 	= 'ios-close-outline'
								size 	= { 32 					}
								color 	= { theme.negative 		}
							/>
						</TouchableOpacity>
					</View>
				</View>
			);
		}

		return (
			<Item
				details 	= { details 				}
				currency 	= { data 					}
				language 	= { this.props.language 	}
				navigation 	= { this.props.navigation 	}
				style 		= { styles 					}
				theme 		= { theme 					}
			/>
		);
	}

	separator ( section , row , highlighted ) {
		
		const theme = this.props.theme;

		return (
			<View
				key 	= { section + '-' + row 	}
				style 	= { seperator ( theme ) 	}
			/>
		);
	}

	total () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				appearance 	= style ( theme ) 		;

		let 	total 		= 0 					;

		this.props.portfolio.items.forEach (( item , index ) => {

			const 	currency 	= this.props.currencies.items.find (( entry , index ) => item.id === entry.id ) ,
					price 		= currency ? parseFloat ( currency.prices.usd ) : undefined;

			if ( ! isNaN (  price )) {
				total += price * parseFloat ( item.amount );
			}
		});

		total = ! isNaN ( total ) ? language.denominations.usd.symbol + numbers.format ( total.toFixed ( 2 )) : language.errors [ 500 ];

		return (
			<View 		style = { appearance.total.view }>
				<Text 	style = { appearance.total.head }>
					{ language.labels.total 			}
				</Text>
				<Text 	style = { appearance.total.col 	}>
					{ total }
				</Text>
			</View>
		);
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		,
				appearance 	= style ( theme ) 		;

		if ( this.props.currencies.loading ) {

			return (
				<View 	style 	= { scenery.body 			}>
					<Loader 
						loading = { this.props.currencies.loading 	}
						size 	= 'large' 
						theme 	= { theme 							}
					/>
				</View>
			);
		}

		if ( this.props.currencies.error ) {

			analytics.screen 	( 'portfolio:500' 				);
			return 				(
				<Error 
					error 		= { this.props.currencies.error }
					language 	= { language 					}
					press 		= { this.refresh 				}
					text 		= { language.errors.ajax 		}
					theme 		= { theme 						}
				/>
			);
		}

		if ( ! this.props.portfolio.items.length ) {

			return (
				<View 			style = { scenery.body 					}>
					<View 		style = { appearance [ '404' ].view 	}>
						<Text 	style = { appearance [ '404' ].text 	}>
							{ language.screens.portfolio [ '404' 		]}
						</Text>
					</View>
				</View>
			);
		}

		return 				(
			<ScrollView style 	= { scenery.body 					}>
				<List 
					fixed 		= { true 							}
					header 		= { this.header 					}
					items 		= { this.props.portfolio.items 		}
					loading 	= { this.props.currencies.loading 	}
					row 		= { this.row 						}
					separator 	= { this.separator 					}
					theme 		= { theme 							}
				/>
				{ this.total ()}
			</ScrollView>
		);
	}
});
