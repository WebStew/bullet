
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	FlatList 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Error 					from '../components/errors/ajax';
import 		Currency 				from '../components/currencies/item';
import 		All 					from '../components/currencies/load-all';
import 		Loader 					from '../components/utilities/loader';
import 		SearchIcon 				from '../components/search/icon';
import 		SearchInput 			from '../components/search/input';
import 		Header 					from '../components/currencies/header';
import 		actions 				from '../actions/currencies';
import 		device 					from '../properties/device';
import 		list 					from '../styles/list';
import 		style 					from '../styles/currencies';
import 		scene 					from '../styles/scene';
import 		seperator 				from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		api 					from '../api/currencies';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		currency 	: state.currency 	,
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

	row ({ 
		index , 
		item 
	}) {

		const 	theme = this.props.theme ,
				style = index % 2 === 0 ? stripe ( theme ).secondary : stripe ( theme ).primary;

		return ( 
			<Currency
				currency 	= { this.props.currency 	}
				item 		= { item 					}
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

		const action = this.props.currencies.items.length > api.limit ? 'stream' : 'get';
	
		analytics.event 	( 
			'currencies' 	, 
			'refresh' 		, 
			action 			, 
			'user' 	
		);
		this.props.dispatch ( actions [ action ] ( this.props.currency.id ));
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
						style 			= { item.styles.text 	}>
						{ item.text }
					</Text>
				</TouchableOpacity>

			);
		});
	}

	data () {

		// If there is a search term - filter the currencies by it
		return this.props.search.value ? this.props.currencies.items.filter (( item , index ) => {

			return item.name.toLowerCase ().indexOf ( this.props.search.value.toLowerCase ()) > -1;

		}) : this.props.currencies.items;
	}

	headers () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				appearance 	= style ( theme ) 		,
				items 		= list 	( theme ) 		;

		let 	active 		= {} 					;

		active [ this.props.currencies.order ] = {
			color : theme.disabled
		};

		return [{
			press : () => {

				analytics.event 	( 'currencies' , 'order' , 'rank' 	);
				this.props.dispatch ( actions.order 	( 'rank' 		));
			} ,
			styles : {
				text : { 
					...items 	[ 'head-text' 	] ,
					...active 	[ 'rank' 		]
				} ,
				touch : {
					...items.cell ,
					...appearance.head
				}
			} ,
			text : language.screens.currencies.headers.rank
		} ,
		{
			press : () => {

				analytics.event 	( 'currencies' , 'order' , 'rating' );
				this.props.dispatch ( actions.order 	( 'rating' 		));
			} ,
			styles : {
				text : {
					...items 	[ 'head-text' 	] 	,
					...appearance.text 				,
					...active 	[ 'rating' 		]
				} ,
				touch : items.cell
			} ,
			text : language.screens.currencies.headers.rating
		} ,
		{
			press : () => {

				analytics.event 	( 'currencies' , 'order' , 'change' );
				this.props.dispatch ( actions.order 	( 'change' 		));
			} ,
			styles : {
				text : {
					...items 	[ 'head-text' 	] 	,
					...appearance.text 				,
					...active 	[ 'change' 		]
				} ,
				touch : items.cell 
			} ,
			text : language.screens.currencies.headers.change
		} ,
		{
			press : () => {

				analytics.event 	( 'currencies' , 'order' , 'price' 	);
				this.props.dispatch ( actions.order 	( 'price' 		));
			} ,
			styles : {
				text : {
					...items 	[ 'head-text' 	] 	,
					...appearance.price 			,
					...active 	[ 'price' 		]
				} ,
				touch : items.cell
			} ,
			text : language.screens.currencies.headers.price
		}];
	}

	header () {

		const 	theme = this.props.theme 	,
				items = list ( theme ) 		;

		if (
			this.props.currencies.items.length === 0 || 
			this.props.currencies.error 
		) {
			
			return null;
		}

		return (
			<View style = { items.head }>
				{ this.cells ()}
			</View>
		);
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				scenery 	= scene ( theme ) 		,
				appearance 	= style ( theme ) 		,
				data 		= this.data () 			;


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

			analytics.screen 	( 'currencies:500' 				);
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

		if ( ! data.length && ! this.props.currencies.loading ) {

			return (
				<View style = { scenery.body }>
					<SearchInput  	/>
					<View 		style 	= { appearance [ '404' ].view 	}>
						<Text 	style 	= { appearance [ '404' ].text 	}>
							{ language.screens.currencies.none + ' "' 	}
							<Text style = { appearance [ '404' ].term 	}>
								{ this.props.search.value + '"' 		}
							</Text>
						</Text>
					</View> 
				</View>
			);
		}

		return (
			<View style = { scenery.body }>
				<SearchInput  	/>
				{ this.header ()}
				<FlatList
					theme 					= { theme 							}
					data 					= { data 							}
					ItemSeparatorComponent 	= { this.separator 					}
					initialNumToRender 		= { Math.round ( device.height / 10 )}
					keyExtractor 			= {( item , index ) => index 		}
					onRefresh 				= { this.refresh 					}
					refreshing 				= { this.props.currencies.loading 	}
					renderItem 				= { this.row 						}
				/>
			</View>
		);
	}
});
