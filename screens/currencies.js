
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
import 		strings 				from '../properties/strings';
import 		list 					from '../styles/list';
import 		style 					from '../styles/currencies';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		api 					from '../api/currencies';

export default connect (

	state => ({
		currencies 	: state.currencies 	,
		search 		: state.search 		,
		theme 		: state.theme
	})

) ( class Currencies extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		return {
			headerLeft 	: <All 			/> ,
			headerRight : <SearchIcon 	/> ,
			headerTitle : <Header 		/> ,
			tabBarIcon 	: ({ focused }) => {

				return (
					<Ionicons
						name 	= 'ios-stats-outline'
						size 	= { 32 																	}
						color 	= { focused ? screenProps.theme.disabled : screenProps.theme.secondary 	}
					/>
				);
			} ,
			title 		: strings.screens.currencies.title
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
			this.props.dispatch ( actions.stream 	());
		}

		else {
			this.props.dispatch ( actions.get 		());
		}
	}

	cells () {

		const theme = this.props.theme

		return this.headers ().map (( item , index ) => {

			return (

				<TouchableOpacity 
					key 	= { index 					}
					onPress = { item.press.bind ( this )}
					style 	= { item.styles.touch 		}
				>
					<Text  style = { item.styles.text 	}>
						{ item.text }
					</Text>
				</TouchableOpacity>

			);
		});
	}

	contents () {

		const 	items = this.data () 	,
				theme = this.props.theme;

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
					{ strings.screens.currencies.none + ' "' 				}
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

		const 	theme 	= this.props.theme;
		let 	active 	= {};

		active [ this.props.currencies.order ] = {
			color : theme.disabled
		};

		return [{
			press 		: () => this.props.dispatch ( actions.order ( 'rank' )) 	, 
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
			text 		: strings.screens.currencies.headers.rank
		} 																			,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'rating' )) 	,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' 	] 						,
					...style 	( theme ) .text  									,
					...active 	[ 'rating' 					]
				} 																	,
				touch 	: list 	( theme ) .cell
			} 																		,
			text 		: strings.screens.currencies.headers.rating
		} 																			,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'change' )) 	,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' ] 							,
					...style 	( theme ) .change  									,
					...active 	[ 'change' 				]
				} 																	,
				touch 	: list 	( theme ) .cell 
			} 																		,
			text 		: strings.screens.currencies.headers.change
		} ,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'price' )) 	,
			styles 		: {
				text 	: {
					...list 	( theme ) [ 'head-text' 	] 						,
					...style 	( theme ) .price  									,
					...active 	[ 'price' 		]
				} ,
				touch 	: list 	( theme ).cell
			} ,
			text 		: strings.screens.currencies.headers.price
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

		const theme = this.props.theme;

		if ( this.props.currencies.error ) {

			return (
				<Error 
					error 	= { this.props.currencies.error 	}
					press 	= { this.refresh 					}
					theme 	= { theme 							}
					text 	= { strings.errors.ajax 			}
				/>
			);
		}

		return (

			<View 				style = { scene ( theme ).body 	}>
				<SearchInput 	theme = { theme 				}/>
				{ this.contents ()}
			</View>
		);
	}
});
