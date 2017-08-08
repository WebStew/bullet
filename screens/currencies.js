
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	RefreshControl 		,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import 		Error 					from '../components/errors/ajax';
import 		List 					from '../components/utilities/list';
import 		Currency 				from '../components/currencies/item';
import 		All 					from '../components/currencies/load-all';
import 		SearchIcon 				from '../components/search/icon';
import 		SearchInput 			from '../components/search/input';
import 		Header 					from '../components/currencies/header';
import 		actions 				from '../actions/currencies';
import 		strings 				from '../properties/strings';
import 		theme 					from '../configuration/theme';
import 		list 					from '../styles/list';
import 		style 					from '../styles/currencies';
import 		styleScene 				from '../styles/scene';
import 		styleSeperator 			from '../styles/seperators';
import 		stripe 					from '../styles/stripe';
import 		api 					from '../api/currencies';

export default connect (

	state => ({
		currencies 	: state.currencies ,
		search 		: state.search
	})

) ( class Currencies extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		headerLeft 	: <All 			/> ,
		headerRight : <SearchIcon 	/> ,
		headerTitle : <Header 		/> ,
		title 		: strings.screens.currencies.title
	});

	constructor ( props ) {
		super 	( props );

		this.header 	= this.header.bind 	( this );
		this.refresh 	= this.refresh.bind ( this );
		this.row 		= this.row.bind 	( this );
	}

	row ( currency , section , row , highlight ) {

		const style = row % 2 === 0 ? stripe.secondary : stripe.primary;

		return ( 
			<Currency
				currency 	= { currency 				}
				navigation 	= { this.props.navigation 	}
				style 		= { style 					}
			/>
		);
	}

	separator ( section , row , highlighted ) {

		return (
			<View
				key 	= { section + '-' + row 	}
				style 	= { styleSeperator.default 	}
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

		const items = this.data ();

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
				/>
			);
		}

		return ( 
			<View 		style = { style [ '404' ].view 			}>
				<Text 	style = { style [ '404' ].text 			}>
					{ strings.screens.currencies.none + ' "' 	}
					<Text style = { style [ '404' ].term 		}>
						{ this.props.search.value + '"' 		}
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

		let active 	= {};

		active [ this.props.currencies.order ] = {
			color : theme.disabled
		};

		return [{
			press 		: () => this.props.dispatch ( actions.order ( 'rank' )) 	, 
			styles 		: {
				text 	: { 
					...list 	[ 'head-text' 	] 									,
					...active 	[ 'rank' 		]
				} 																	,
				touch 	: {
					...list.cell 													,
					...style.head
				}
			} 																		,
			text 		: strings.screens.currencies.headers.rank
		} 																			,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'rating' )) 	,
			styles 		: {
				text 	: {
					...list 	[ 'head-text' 	] 									,
					...style.text  													,
					...active 	[ 'rating' 		]
				} 																	,
				touch 	: list.cell
			} 																		,
			text 		: strings.screens.currencies.headers.rating
		} 																			,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'change' )) 	,
			styles 		: {
				text 	: {
					...list 	[ 'head-text' 	] 									,
					...style.change  												,
					...active 	[ 'change' 		]
				} 																	,
				touch 	: list.cell 
			} 																		,
			text 		: strings.screens.currencies.headers.change
		} ,
		{
			press 		: () => this.props.dispatch ( actions.order ( 'price' )) 	,
			styles 		: {
				text 	: {
					...list 	[ 'head-text' 	] 									,
					...style.price  												,
					...active 	[ 'price' 		]
				} ,
				touch 	: list.cell
			} ,
			text 		: strings.screens.currencies.headers.price
		}];
	}

	header () {

		if (( this.props.currencies.loading && this.props.currencies.items === 0 ) || this.props.currencies.error ) {
			
			return null;
		}

		return (
			<View>
				<View 
					style = {{ 
						...list.row , 
						...list.head 
					}}
				>
					{ this.cells ()}
				</View>
			</View>
		);
	}

	render () {

		if ( this.props.currencies.error ) {

			return (
				<Error 
					error 	= { this.props.currencies.error 	}
					press 	= { this.refresh 					}
					text 	= { strings.errors.ajax 			}
				/>
			);
		}

		return (

			<View 	style = { styleScene.default 				}>

				<SearchInput 		/>
				{ this.contents 	()}

			</View>
		);
	}
});
