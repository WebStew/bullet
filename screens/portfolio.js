
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	FlatList 			,
			Platform 			,
			Share 				,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Error 					from '../components/errors/ajax';
import 		Item 					from '../components/portfolio/item';
import 		Action 					from '../components/utilities/header-action';
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
import 		application 			from '../configuration/application';

export default connect (

	state => ({
		currency 	: state.currency 	,
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
			headerLeft 	: <Action 
				icon 	= 'ios-share-outline'
				press 	= {() => {

					const 	platform 	= Platform.OS;

					analytics.event ( 'cryptobullography' , 'share' , 'open' , platform );
					Share.share 	(
						{
							message 	: language.screens.share.summary 	,
							title 		: language.screens.share.title 		,
							url 		: application.store ()
						} , 
						{
							dialogTitle : language.screens.share.title 		,
							tintColor 	: theme.chrome
						}
					)
					.then 	(() 		=> analytics.event ( 'cryptobullography' , 'share' , 'success' 	, platform 	))
					.catch 	(( error ) 	=> analytics.event ( 'cryptobullography' , 'share' , 'error' 	, platform 	));
				}}
				value 	= { language.actions.share }
			/> ,
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
			<View style = { items.head }>
				{ this.cells ()}
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
		this.props.dispatch ( actions.stream ( this.props.currency.id ));
	}

	row ({
		index ,
		item
	}) {
		
		const 	theme 		= this.props.theme 																,
				language 	= this.props.language 															,
				styles 		= index % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary 		,

				// Baseline European values of 50,00 which is the same as 50.00
				amount 		= parseFloat ( item.amount.replace ( ',' , '.' )) 								,

				// Figure a better way to do this. We shouldn't loop the currency array for every row
				data 		= this.props.currencies.items.find (( currency ) => currency.id === item.id ) 	,
				details 	= data ? {
					amount 	: amount 																		,
					id 		: data.id 																		,
					name 	: data.name 																	,
					price 	: data.prices.fiat 																,
					total 	: amount * parseFloat ( data.prices.fiat )
				} 			: undefined 																	,
				appearance 	= style ( theme );

		// We unable to find the currency in the loaded results perhaps because it is outside the top 100
		// Potentially the save currency no longers exists
		// User has option to load the entire data set or remove it from their portfolio
		if ( ! details ) {

			return (
				<View 		style 	= {{
					...appearance.missing.view ,
					...styles
				}}>
					<Text 	
						ellipsizeMode 	= 'tail'
						numberOfLines 	= { 1 						}
						style 			= { appearance.missing.text }
						>
						{ item.name } { language.errors [ '500' ]}
					</Text>
					<View 	style 	= { appearance.missing.row 		}>
						<TouchableOpacity 
							onPress = {() => this.remove ( item.id )}
							style 	= { appearance.missing.icon 	}
						>
							<Ionicons
								name 	= 'ios-close-outline'
								size 	= { 32 					}
								color 	= { theme.negative 		}
							/>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress = { this.refresh 			}
							style 	= { appearance.missing.icon }
						>
							<Ionicons
								name 	= 'ios-refresh-outline'
								size 	= { 32 					}
								color 	= { theme.secondary 	}
							/>
						</TouchableOpacity>
					</View>
				</View>
			);
		}

		return (
			<Item
				currency 	= { this.props.currency 	}
				item 		= { details 				}
				data 		= { data 					}
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

			const 	currency 	= this.props.currencies.items.find (( entry ) => item.id === entry.id ) ,
					price 		= currency ? parseFloat ( currency.prices.fiat ) : undefined;

			if ( ! isNaN (  price )) {
				total += price * parseFloat ( item.amount );
			}
		});

		total = ! isNaN ( total ) ? this.props.currency.symbol + numbers.format ( total.toFixed ( 2 )) : language.errors [ 500 ];

		return (
			<View 		style = { appearance.total.view 		}>
				<Text 	style = { appearance.total.head 		}>
					{ language.screens.portfolio.headers.total 	}
				</Text>
				<Text 	style = { appearance.total.col 			}>
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

		return 				(
			<View style = { scenery.body }>
				{ this.header ()}
				<FlatList 
					data 					= { this.props.portfolio.items 	}
					ItemSeparatorComponent 	= { this.separator 				}
					keyExtractor 			= {( item , index ) => index 	}
					ListEmptyComponent 		= {
						<View 		style 	= { scenery.body 				}>
							<View 	style 	= { appearance [ '404' ].view 	}>
								<Text style = { appearance [ '404' ].text 	}>
									{ language.screens.portfolio [ '404' 	]}
								</Text>
							</View>
						</View>
					}
					renderItem 				= { this.row 					}
				/>
				{ this.total ()}
			</View>
		);
	}
});
