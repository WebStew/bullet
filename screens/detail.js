
import 		React 				from 'react';
import { 	Image 			,
			View 			,
			ScrollView 		,
			Text 			} 	from 'react-native';
import { 	connect 		} 	from 'react-redux';
import 		actions 			from '../actions/graphs';
import 		Back 				from '../components/utilities/back';
import 		Heading 			from '../components/utilities/headings';
import 		Sections 			from '../components/utilities/sections';
import 		Tree 				from '../components/graphs/tree';
import 		strings 			from '../properties/strings';
import 		images 				from '../api/images';
import 		banner 				from '../styles/header';
import 		layout 				from '../styles/layout';
import 		scene 				from '../styles/scene';
import 		style 				from '../styles/detail';
import 		numbers 			from '../utilities/numbers';

export default connect (

	state => ({
		graphs : state.graphs
	})

) (  class Detail extends React.Component {

	static navigationOptions = ({ navigation }) => ({

		title 			: `${ navigation.state.params.currency.name } ${ strings.screens.detail.title }` ,

		headerLeft 		: <Back 
			press 		= {() => navigation.goBack 	()} 
			value 		= { strings.actions.return 	}
		/> ,

		headerRight 	: <Image 
			style 		= { banner.default.icon }
			source 		= {{
				uri 	: images.currencies.small ( navigation.state.params.currency.id ) 
			}}
		/>
	});

	constructor ( props ) {
		
		super ( props );

		this.graph = this.graph.bind ( this );
	}

	componentWillMount () {
		this.graph ();
	}

	graph () {
		
		this.props.dispatch ( actions.get ( this.props.navigation.state.params.currency.id ));
	}

	render () {

		const currency = this.props.navigation.state.params.currency;

		return (
			<ScrollView style = { scene.default }>

				<View 		style = { layout.fill 	}>
					<View 	style = { layout.row 	}>

						<Image 	
							style 	= { style.icon }
							source 	= {{
								uri : images.currencies.large ( currency.id ) 
							}}
						/>
						
						<Heading 
							title 	= { currency.name + ' ( ' +  currency.symbol + ' )' } 
							type 	= '1'
						/>
					</View>

					<Sections sections = {[
						{
							title 		: strings.screens.bull.changes.title 		,
							data 		: [
								{
									property 	: strings.screens.bull.changes.hour ,
									suffix 		: '%' 								,
									type 		: 'highlight' 						,
									value 		: currency.change.hour
								} 													, 
								{
									property 	: strings.screens.bull.changes.day 	,
									suffix 		: '%' 								,
									type 		: 'highlight' 						,
									value 		: currency.change.day
								} 													,
								{
									property 	: strings.screens.bull.changes.week ,
									suffix 		: '%' 								,
									type 		: 'highlight' 						,
									value 		: currency.change.week
								}
							]
						} ,

						{
							title 		: strings.screens.bull.values.title 		,
							data 		: [
								{
									prefix 		: strings.denominations.usd.symbol 	,
									property 	: strings.denominations.usd.name 	,
									value 		: currency.prices.usd
								} , 
								{
									prefix 		: strings.denominations.btc.symbol 	,
									property 	: strings.denominations.btc.name 	,
									value 		: currency.prices.btc
								}
							]
						} ,

						{
							title 		: strings.screens.bull.market.title 			,
							data 		: [
								{
									property 	: strings.screens.bull.rating 			,
									type 		: 'highlight' 							,
									value 		: numbers.format ( currency.rating )
								} 														,
								{
									prefix 		: strings.denominations.usd.symbol 		,
									property 	: strings.screens.bull.market.cap 		,
									value 		: currency.market.usd
								} 														,
								{
									property 	: strings.screens.bull.market.rank 		,
									value 		: numbers.rank ( currency.rank )
								} 														,
								{
									property 	: strings.screens.bull.market.available ,
									value 		: currency.supply.available
								} 														, 
								{
									property 	: strings.screens.bull.market.total 	,
									value 		: currency.supply.total
								} 														, 
								{
									prefix 		: strings.denominations.usd.symbol 		,
									property 	: strings.screens.bull.market.volume 	,
									value 		: currency.volume.usd
								}
							]
						}

					]}/>

					<Tree 
						data 	= { this.props.graphs.prices 	}
						error 	= { this.props.graphs.error 	}
						refresh = { this.graph 					}
						loading = { this.props.graphs.loading 	}
					/>

				</View>
			</ScrollView>
		);

	}
});
