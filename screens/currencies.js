
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	RefreshControl 		,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Error 					from '../components/errors/ajax';
import 		List 					from '../components/utilities/list';
import 		Currency 				from '../components/currencies/item';
import 		All 					from '../components/currencies/load-all';
import 		SearchIcon 				from '../components/search/icon';
import 		SearchInput 			from '../components/search/input';
import 		Header 					from '../components/currencies/header';
import 		actions 				from '../actions/currencies';
import 		list 					from '../styles/list';
import 		style 					from '../styles/currencies';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		api 					from '../api/currencies';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		currencies 	: state.currencies 	,
		language 	: state.language 	,
		search 		: state.search 		,
		theme 		: state.theme
	})

) ( class Currencies extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		const language 	= screenProps.language 	,
				theme 	= screenProps.theme 	;

		return {
			headerLeft 	: <All 			/> ,
			headerRight : <SearchIcon 	/> ,
			headerTitle : <Header 		/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-stats-outline'
						size 	= { 32 											}
						color 	= { focused ? theme.disabled : theme.secondary 	}
					/>
				);
			} ,
			title 		: language.screens.currencies.title
		}
	};

	constructor ( props ) {
		super 	( props );

		this.header 	= this.header.bind 		( this );
		this.refresh 	= this.refresh.bind 	( this );
		this.row 		= this.row.bind 		( this );
		this.separator 	= this.separator.bind 	( this );
	}

	row ( currency , section , row , highlight ) {

		const 	theme = this.props.theme ,
				style = row % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary;

		return ( 
			<Currency
				currency 	= { currency 				}
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

	refresh () {
		
		if ( this.props.currencies.items.length > api.limit ) {

			analytics.event 	( 'currencies' , 'refresh' , 'stream' , 'user' 	);
			this.props.dispatch ( actions.stream 								());
		}

		else {
			analytics.event 	( 'currencies' , 'refresh' , 'get' ,'user' 		);
			this.props.dispatch ( actions.get 									());
		}
	}

	cells () {

		const theme = this.props.theme

		return this.headers ().map (( item , index ) => {

			return (

				<TouchableOpacity 
					key 			= { index 					}
					onPress 		= { item.press.bind ( this )}
					style 			= { item.styles.touch 		}
				>
					<Text  
						numberOfLines 	= { 1 					} 
						style 			= { item.styles.text 	}>
						{ item.text }
					</Text>
				</TouchableOpacity>

			);
		});
	}

	contents () {

		const 	items 		= this.data () 			,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		if ( items.length ) {

			return (

				<List 
					fixed 	= { true 							}
					header 	= { this.header 					}
					items 	= { items 							}
					loading = { this.props.currencies.loading 	}
					refresh = {
						<RefreshControl
							refreshing 	= { this.props.currencies.loading 	}
							onRefresh 	= { this.refresh 					}
						/>
					}
					row 		= { this.row 			}
					separator 	= { this.separator 		}
					theme 		= { theme 				}
				/>
			);
		}

		return ( 
			<View 		style = { style ( theme ) [ '404' ].view 			}>
				<Text 	style = { style ( theme ) [ '404' ].text 			}>
					{ language.screens.currencies.none + ' "' 				}
					<Text style = { style ( theme ) [ '404' ].term 			}>
						{ this.props.search.value + '"' 					}
					</Text>
				</Text>
			</View> 
		);
	}

	data () {

		// If there is a search term - filter the currencies by it
		return this.props.search.value ? this.props.currencies.items.filter (( item , index ) => {

			return item.name.toLowerCase ().indexOf ( this.props.search.value.toLowerCase ()) > -1;

		}) : this.props.currencies.items;
	}

	headers () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;
		let 	active 		= {} 					;

		active [ this.props.currencies.order ] = {
			color : theme.disabled
		};

		return [{
			press 		: () => {

				analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				this.props.dispatch ( actions.order ( 'rank' 			));
			} 																		, 
			styles 		: {
				text 	: { 
					...list 	( theme ) [ 'head-text' ] 							,
					...active 	[ 'rank' 				]
				} 																	,
				touch 	: {
					...list 	( theme ) .cell 									,
					...style 	( theme ) .head
				}
			} 																		,
			text 		: language.screens.currencies.headers.rank
		} 																			,
		{
			press 		: () => {

				analytics.event 	( 'currencies' , 'order' , 'rating' 	);
				this.props.dispatch ( actions.order ( 'rating' 				));
			} 																		,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' 	] 						,
					...style 	( theme ) .text  									,
					...active 	[ 'rating' 					]
				} 																	,
				touch 	: list 	( theme ) .cell
			} 																		,
			text 		: language.screens.currencies.headers.rating
		} 																			,
		{
			press 		: () => {

				analytics.event 	( 'currencies' , 'order' , 'change' );
				this.props.dispatch ( actions.order ( 'change' 			));
			} 																		,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' ] 							,
					...style 	( theme ) .change  									,
					...active 	[ 'change' 				]
				} 																	,
				touch 	: list 	( theme ) .cell 
			} 																		,
			text 		: language.screens.currencies.headers.change
		} ,
		{
			press 		: () => {

				analytics.event 	( 'currencies' , 'order' , 'price' 	);
				this.props.dispatch ( actions.order ( 'price' 			));
			} 																		,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' 	] 						,
					...style 	( theme ) .price  									,
					...active 	[ 'price' 		]
				} ,
				touch 	: list 	( theme ).cell
			} ,
			text 		: language.screens.currencies.headers.price
		}];
	}

	header () {

		const theme = this.props.theme;

		if (( this.props.currencies.loading && this.props.currencies.items === 0 ) || this.props.currencies.error ) {
			
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

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		if ( this.props.currencies.error ) {

			analytics.screen 	( 'currencies:500' 				);
			return 				(
				<Error 
					error 		= { this.props.currencies.error }
					language 	= { language 					}
					press 		= { this.refresh 				}
					theme 		= { theme 						}
					text 		= { strings.errors.ajax 		}
				/>
			);
		}

		analytics.screen 	( 'currencies:200' 					);
		return 				(

			<View 				style = { scene ( theme ).body 	}>
				<SearchInput  	/>
				{ this.contents ()}
			</View>
		);
	}
});
