
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
import 		api 					from '../api/currencies';

import 		list 					from '../styles/list';
import 		style 					from '../styles/portfolio';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		numbers 				from '../utilities/numbers';
import 		analytics 			from '../utilities/analytics';

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
		this.row 		= this.row.bind 		( this );
		this.separator 	= this.separator.bind 	( this );
	}

	headers () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		// let 	active 		= {} 					;

		// active [ this.props.currencies.order ] = {
		// 	color : theme.disabled
		// };

		return [{
			press 		: () => {

				// analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				// this.props.dispatch ( actions.order ( 'rank' 			));
			} 																		, 
			styles 		: {
				text 	: { 
					...list 	( theme ) [ 'head-text' ]
					//...active 	[ 'rank' 				]
				} 																	,
				touch 	: list 	( theme ).cell
			} 																		,
			text 		: 'Name'
		} ,
		{
			press 		: () => {

				// analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				// this.props.dispatch ( actions.order ( 'rank' 			));
			} 																		, 
			styles 		: {
				text 	: { 
					...list 	( theme ) [ 'head-text' ] ,
					...style 	( theme ).cell
					//...active 	[ 'rank' 				]
				} 																	,
				touch 	: list 	( theme ).cell
			} 																		,
			text 		: 'Amount'
		} ,
		{
			press 		: () => {

				// analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				// this.props.dispatch ( actions.order ( 'rank' 			));
			} 																		, 
			styles 		: {
				text 	: { 
					...list 	( theme ) [ 'head-text' ] ,
					...style 	( theme ).cell
					//...active 	[ 'rank' 				]
				} 																	,
				touch 	: list 	( theme ).cell
			} 																		,
			text 		: 'Price'
		} ,
		{
			press 		: () => {

				// analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				// this.props.dispatch ( actions.order ( 'rank' 			));
			} 																		, 
			styles 		: {
				text 	: { 
					...list 	( theme ) [ 'head-text' ] ,
					...style 	( theme ).cell
					//...active 	[ 'rank' 				]
				} 																	,
				touch 	: list 	( theme ).cell
			} 																		,
			text 		: 'Total'
		}];
	}

	cells () {
		
		const theme = this.props.theme

		return this.headers ().map (( item , index ) => {

			const styles = index === 0 ? 	{
				...item.styles.touch 		,
				...style ( theme ).head 
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

		const theme = this.props.theme;
	
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
						...list ( theme ).row , 
						...list ( theme ).head 
					}}
				>
					{ this.cells ()}
				</View>
			</View>
		);
	}

	refresh () {
				
		if ( this.props.currencies.items.length > api.limit ) {
			
			analytics.event 	( 
				'portfolio' 	, 
				'refresh' 		, 
				'stream' 		, 
				'user' 	
			);
			this.props.dispatch ( actions.stream ());
		}

		else {
			
			analytics.event 	( 
				'portfolio' 	, 
				'refresh' 		, 
				'get' 			,
				'user' 		
			);
			this.props.dispatch ( actions.get ());
		}
	}

	row ( currency , section , row , highlight ) {
		
		const 	theme 	= this.props.theme 															,
				style 	= row % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary 	,
				data 	= this.props.currencies.items.find (( item ) => item.id === currency.id ) 	,
				details = {
					amount 	: currency.amount 	,
					id 		: data.id 			,
					name 	: data.name 		,
					price 	: data.prices.usd 	,
					total 	: parseFloat ( currency.amount ) * parseFloat ( data.prices.usd )
				};

		return (
			<Item
				details 	= { details 				}
				currency 	= { data 					}
				language 	= { this.props.language 	}
				navigation 	= { this.props.navigation 	}
				style 		= { style 					}
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
				language 	= this.props.language 	;
		let 	total 		= 0 					;

		this.props.portfolio.items.forEach (( item , index ) => {

			const 	currency 	= this.props.currencies.items.find (( entry , index ) => item.id === entry.id ) ,
					price 		= parseFloat ( currency.prices.usd );

			if ( ! isNaN (  price )) {
				total += price * parseFloat ( item.amount );
			}
		});

		total = ! isNaN ( total ) ? language.denominations.usd.symbol + numbers.format ( total.toFixed ( 2 )) : language.errors [ 500 ];

		return (
			<View 		style = { style ( theme ).total.view }>
				<Text 	style = { style ( theme ).total.head }>
					{ language.labels.total }
				</Text>
				<Text 	style = { style ( theme ).total.col }>
					{ total }
				</Text>
			</View>
		);
	}

	render () {

		const 	language 	= this.props.language 	,
		theme 		= this.props.theme 		;

		if ( this.props.currencies.loading ) {

			return (
				<View 	style 	= { scene ( theme ).body 			}>
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
				<View 			style = { scene ( theme ).body 				}>
					<View 		style = { style ( theme ) 	[ '404' ].view 	}>
						<Text 	style = { style ( theme ) 	[ '404' ].text 	}>
							{ language.screens.portfolio 	[ '404' ]}
						</Text>
					</View>
				</View>
			);
		}

		// refresh = {
		// 	<RefreshControl
		// 		refreshing 	= { this.props.currencies.loading 	}
		// 		onRefresh 	= { this.refresh 					}
		// 	/>
		// }

		return 				(
			<ScrollView style = { scene ( theme ).body 	}>		
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
