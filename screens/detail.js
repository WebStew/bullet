
import 		React 				from 'react';
import { 	Image 			,
			View 			,
			ScrollView 		,
			Text 			,
			TextInput 		} 	from 'react-native';
import { 	connect 		} 	from 'react-redux';
import 		actions 			from '../actions/graphs';
//import 		Advert 				from '../components/adverts/button';
import 		Button 				from '../components/utilities/button';
import 		Back 				from '../components/utilities/back';
import 		Heading 			from '../components/utilities/headings';
import 		Modal 				from '../components/portfolio/modal-add';
import 		Sections 			from '../components/utilities/sections';
import 		Tree 				from '../components/graphs/tree';
import 		images 				from '../api/images';
import 		banner 				from '../styles/header';
import 		layout 				from '../styles/layout';
import 		scene 				from '../styles/scene';
import 		style 				from '../styles/detail';
import 		numbers 			from '../utilities/numbers';
import 		analytics 			from '../utilities/analytics';
//import 		adverts 			from '../configuration/adverts';

export default connect (

	state => ({
		currency 	: state.currency 	,
		graphs 		: state.graphs 		,
		language 	: state.language 	,
		portfolio 	: state.portfolio 	,
		theme 		: state.theme
	})

) ( class Detail extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 					,
				theme 		= screenProps.theme 					,
				name 		= navigation.state.params.item.name ;

		return {

			title 			: `${ name } ${ language.screens.detail.title }` ,

			headerLeft 		: <Back 
				press 		= {() => navigation.goBack 	()} 
				value 		= { language.actions.return }
			/> ,

			headerRight 	: <Image 
				style 		= { banner ( theme ).icon }
				source 		= {{
					uri 	: images.currencies.small ( navigation.state.params.item.id ) 
				}}
			/>
		};
	};

	constructor ( props ) {
		super 	( props );

		this.close 	= this.close.bind ( this );
		this.state 	= {
			modal 	: false
		};
 
	}

	componentWillMount () {

		const item = this.props.navigation.state.params.item;

		analytics.event 	( 'graph' , 'get' , item.name , 'application' 	);
		this.props.dispatch ( actions.get ( item.id 						));
	}

	// componentWillUnmount () {

	// 	this.props.dispatch ( actions.reset ());
	// }

	close () {

		this.setState ({ 
			modal 	: false 
		});
	}

	render () {

		const 	item 		= this.props.navigation.state.params.item 										,
				currency 	= this.props.currency 															,
				language 	= this.props.language 															,
				theme 		= this.props.theme 																,
				portfolioed = this.props.portfolio.items.find (( value , index ) => value.id === item.id ) 	,
				action 		= portfolioed ? language.screens.detail.update : language.screens.detail.add 	,
				scenery 	= scene 	( theme ) 															,
				arrange 	= layout 	( theme ) 															,
				appearance 	= style 	( theme ) 															;

		analytics.screen 	( 'detail:' + item.name );
		return 				(
			<ScrollView style = { scenery.body 		}>
				<View 	style = { arrange.fill 		}>
					<View 	
						style = {{
							...arrange.row 		,
							...scenery.header
						}}
					>
						<Image 	
							style 	= { appearance.icon }
							source 	= {{
								uri : images.currencies.large ( item.id ) 
							}}
						/>	
						<Heading 
							title 	= { item.name + ' ( ' +  item.symbol + ' )' } 
							theme 	= { theme 									}
							type 	= '1'
						/>
					</View>
					<Tree 
						data 		= { this.props.graphs.prices.usd 	}
						error 		= { this.props.graphs.error 		}
						language 	= { language 						}
						loading 	= { this.props.graphs.loading 		}
						name 		= { item.name 						}
						theme 		= { theme 							}
						refresh 	= {() => {

							analytics.event ( 
								'graph' 	, 
								'get' 		, 
								item.name 	, 
								'user'
							);
							this.props.dispatch ( 
								actions.get ( item.id )
							);
						}}
					/>
					<View 	style 	= { appearance.button }>
						<Button
							press 	= {() => {
								
								this.setState ({
									modal : true
								});
							}}
							theme = { theme 	}
							value = { action 	}
						/>
					</View>
					<Modal 
						active 		= { this.state.modal 		}
						amount 		= { this.state.amount 		}
						item 		= { item 					}
						dispatch 	= { this.props.dispatch 	}
						language 	= { language 				}
						portfolio 	= { this.props.portfolio 	}
						reset 		= { this.close 				}
						theme 		= { theme 					}
					/>
					<Sections  
						language 	= { language 	}
						theme 		= { theme 		}
						sections 	= {[
							{
								title 		: language.screens.bull.changes.title 			,
								data 		: [
									{
										property 	: language.screens.bull.changes.hour 	,
										suffix 		: '%' 									,
										type 		: 'highlight' 							,
										value 		: item.change.hour
									} 														, 
									{
										property 	: language.screens.bull.changes.day 	,
										suffix 		: '%' 									,
										type 		: 'highlight' 							,
										value 		: item.change.day
									} 														,
									{
										property 	: language.screens.bull.changes.week 	,
										suffix 		: '%' 									,
										type 		: 'highlight' 							,
										value 		: item.change.week
									}
								]
							} ,

							{
								title 		: language.screens.bull.values.title 		,
								data 		: [
									{
										prefix 		: currency.symbol 					,
										property 	: currency.names [ language.id ] 	,
										value 		: item.prices.fiat
									} , 
									{
										prefix 		: language.denominations.btc.symbol ,
										property 	: language.denominations.btc.name 	,
										value 		: item.prices.btc
									}
								]
							} ,

							{
								title 		: language.screens.bull.market.title 			,
								data 		: [
									{
										property 	: language.screens.bull.rating 			,
										type 		: 'highlight' 							,
										value 		: numbers.format ( item.rating )
									} 														,
									{
										prefix 		: currency.symbol 						,
										property 	: language.screens.bull.market.cap 		,
										value 		: item.market
									} 														,
									{
										property 	: language.screens.bull.market.rank 	,
										value 		: numbers.rank ( item.rank )
									} 														,
									{
										property 	: language.screens.bull.market.available ,
										value 		: item.supply.available
									} 														, 
									{
										property 	: language.screens.bull.market.total 	,
										value 		: item.supply.total
									} 														, 
									{
										prefix 		: currency.symbol 						,
										property 	: language.screens.bull.market.volume 	,
										value 		: item.volume
									}
								]
							}
						]}
					/>
				</View>
			</ScrollView>
		);
	}
});
