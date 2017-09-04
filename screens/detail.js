
import 		React 				from 'react';
import { 	Image 			,
			View 			,
			ScrollView 		,
			Text 			,
			TextInput 		} 	from 'react-native';
import { 	connect 		} 	from 'react-redux';
import 		actions 			from '../actions/graphs';
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

export default connect (

	state => ({
		graphs 		: state.graphs 		,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Detail extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language 					,
				theme 		= screenProps.theme 					,
				name 		= navigation.state.params.currency.name ;

		return {

			title 			: `${ name } ${ language.screens.detail.title }` ,

			headerLeft 		: <Back 
				press 		= {() => navigation.goBack 	()} 
				value 		= { language.actions.return }
			/> ,

			headerRight 	: <Image 
				style 		= { banner ( theme ).icon }
				source 		= {{
					uri 	: images.currencies.small ( navigation.state.params.currency.id ) 
				}}
			/>
		};
	};

	constructor ( props ) {
		super 	( props );

		this.close = this.close.bind ( this );
		this.state = { 
			amount 	: 0 ,
			modal 	: false 
		};
	}

	componentWillMount () {

		const currency = this.props.navigation.state.params.currency;

		analytics.event 	( 'graph' , 'get' , currency.name , 'application' 	);
		this.props.dispatch ( actions.get ( currency.id 						));
	}

	close () {

		this.setState ({ 
			modal 	: false 
		});
	}

	render () {

		const 	currency 	= this.props.navigation.state.params.currency 	,
				language 	= this.props.language 							,
				theme 		= this.props.theme 								;

		analytics.screen 	( 'detail:' + currency.name 			);
		return 				(
			<ScrollView style = { scene 	( theme ).body 			}>
				<View 	style = { layout 	( theme ).fill 			}>
					<View 	
						style = {{
							...layout 	( theme ).row ,
							...scene 	( theme ).header
						}}
					>

						<Image 	
							style 	= { style ( theme ).icon }
							source 	= {{
								uri : images.currencies.large ( currency.id ) 
							}}
						/>
						
						<Heading 
							title 	= { currency.name + ' ( ' +  currency.symbol + ' )' } 
							theme 	= { theme 											}
							type 	= '1'
						/>
					</View>

					<Tree 
						data 		= { this.props.graphs.prices.usd 	}
						error 		= { this.props.graphs.error 		}
						language 	= { language 						}
						loading 	= { this.props.graphs.loading 		}
						name 		= { currency.name 					}
						theme 		= { theme 							}
					/>

					<View 	style 	= { style ( theme ).button 			}>
						<Button
							press 	= {() => {
								this.setState ({
									modal : true
								});
							}}
							theme = { theme 							}
							value = { language.screens.detail.portfolio }
						/>
					</View>
					
					<Modal 
						active 		= { this.state.modal 	}
						amount 		= { this.state.amount 	}
						currency 	= { currency 			}
						dispatch 	= { this.props.dispatch }
						language 	= { language 			}
						reset 		= { this.close 			}
						theme 		= { theme 				}
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
										value 		: currency.change.hour
									} 														, 
									{
										property 	: language.screens.bull.changes.day 	,
										suffix 		: '%' 									,
										type 		: 'highlight' 							,
										value 		: currency.change.day
									} 														,
									{
										property 	: language.screens.bull.changes.week 	,
										suffix 		: '%' 									,
										type 		: 'highlight' 							,
										value 		: currency.change.week
									}
								]
							} ,

							{
								title 		: language.screens.bull.values.title 		,
								data 		: [
									{
										prefix 		: language.denominations.usd.symbol ,
										property 	: language.denominations.usd.name 	,
										value 		: currency.prices.usd
									} , 
									{
										prefix 		: language.denominations.btc.symbol ,
										property 	: language.denominations.btc.name 	,
										value 		: currency.prices.btc
									}
								]
							} ,

							{
								title 		: language.screens.bull.market.title 			,
								data 		: [
									{
										property 	: language.screens.bull.rating 			,
										type 		: 'highlight' 							,
										value 		: numbers.format ( currency.rating )
									} 														,
									{
										prefix 		: language.denominations.usd.symbol 	,
										property 	: language.screens.bull.market.cap 		,
										value 		: currency.market.usd
									} 														,
									{
										property 	: language.screens.bull.market.rank 	,
										value 		: numbers.rank ( currency.rank )
									} 														,
									{
										property 	: language.screens.bull.market.available ,
										value 		: currency.supply.available
									} 														, 
									{
										property 	: language.screens.bull.market.total 	,
										value 		: currency.supply.total
									} 														, 
									{
										prefix 		: language.denominations.usd.symbol 	,
										property 	: language.screens.bull.market.volume 	,
										value 		: currency.volume.usd
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
