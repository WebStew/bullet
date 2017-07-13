
import 		React 			from 'react';
import { 	connect } 		from 'react-redux';
import {	RefreshControl 	,
			Text 			,
			TouchableOpacity ,
			View 	} 		from 'react-native';
import 		Error 			from '../components/errors/ajax';
import 		Loader 			from '../components/utilities/loader';
import 		List 			from '../components/utilities/list';
import 		Currency 		from '../components/currencies/item';
import 		actions 		from '../actions/currencies';
import 		strings 		from '../properties/strings';
import 		list 			from '../styles/list';
import 		style 			from '../styles/currencies';
import 		styleScene 		from '../styles/scene';
import 		styleSeperator 	from '../styles/seperators';
import 		stripe 			from '../styles/stripe';
import 		theme 			from '../styles/theme';

export default connect (

	state => ({
		currencies : state.currencies
	})

) ( class Currencies extends React.Component {

	static navigationOptions = {
		headerTitle : strings.screens.currencies.title ,
		title 		: strings.screens.currencies.title
	};

	constructor ( props ) {

		super ( props );

		this.header 	= this.header.bind 	( this );
		this.refresh 	= this.refresh.bind ( this );
		this.row 		= this.row.bind 	( this );
	}

	row ( currency , section , row , highlight ) {

		let style = row % 2 === 0 ? stripe.secondary : stripe.primary;

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
		
		this.props.dispatch ( actions.get ());
	}

	// Rewrite this to a loop noob
	header () {

		let active = {};		
		
		active [ this.props.currencies.order ] = {
			color : theme.accents [ 2 ]
		}

		return (
			<View>
				<View 
					style = {{ 
						...list.row , 
						...list.head 
					}}
				>
					<TouchableOpacity 
						style = {{
							...list.cell ,
							...style.head
						}}
						onPress = {() => {
							
							this.props.dispatch ( actions.order ( 'rank' ));
						}}
					>
						<Text  
							style = {{ 
								...list 	[ 'head-text' 	] ,
								...active 	[ 'rank' 		]
							}}
						>
							{ strings.screens.currencies.headers.rank }
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style 	= { list.cell }
						onPress = {() => {	

							this.props.dispatch ( actions.order ( 'rating' ));
						}}
					>
						<Text 
							style = {{ 
								...list 	[ 'head-text' 	] 	,
								...style.text  					,
								...active 	[ 'rating' 		]
							}}
						>
							{ strings.screens.currencies.headers.rating }
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style 	= { list.cell }
						onPress = {() => {

							this.props.dispatch ( actions.order ( 'change' ));
						}}
					>
						<Text 
							style = {{ 
								...list 	[ 'head-text' 	] 	,
								...style.change  				,
								...active 	[ 'change' 		]
							}}
						>
							{ strings.screens.currencies.headers.change }
						</Text>
					</TouchableOpacity>
					
					<TouchableOpacity
						style 	= { list.cell }
						onPress = {() => {
							
							this.props.dispatch ( actions.order ( 'price' ));
						}}
					>
						<Text 
							style = {{
								...list 	[ 'head-text' 	] 	,
								...style.price  				,
								...active 	[ 'price' 		]
							}}
						>
							{ strings.screens.currencies.headers.price }
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	render () {

		return (
			
			<View style = { styleScene.default }>

				<Loader
					loading = { this.props.currencies.loading 		}
					size 	= 'large'
				/>

				<Error 
					error 	= { this.props.currencies.error 		}
					press 	= { this.refresh 						}
					text 	= { strings.errors.ajax 				}
				/>

				<List 
					fixed 	= { true 							}
					header 	= { this.header 					}
					items 	= { this.props.currencies.items 	}
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

			</View>
		);
	}

});
