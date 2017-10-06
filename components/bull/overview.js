
import 		React 			from 'react';
import { 	Animated 	,
			Image 		,
			Text 		,
			View 		} 	from 'react-native';
import 		Heading 		from '../utilities/headings';
import 		Sections 		from '../utilities/sections';
import 		layout 			from '../../styles/layout';
import 		style 			from '../../styles/section';
import 		scene 			from '../../styles/scene';
import 		bull 			from '../../styles/bull';
import 		images 			from '../../api/images';
import 		numbers 		from '../../utilities/numbers';

export default class Overview extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.state = {
			fade 	: new Animated.Value ( 0 )
		};
	}

	componentDidMount () {

		Animated.timing (
			this.state.fade ,
			{
				toValue 	: 1, 
				duration 	: 500
			}
		).start ();
	}

	rating () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				bulls 		= bull ( theme ) 		;

		if ( this.props.bull.rating ) {

			return (	
				<Animated.Text 
					style = {{
						...bulls.rating ,
						opacity : this.state.fade
					}}
				>
					{ numbers.format ( this.props.bull.rating )}
				</Animated.Text>
			);
		}

		return (
			<Text style = { bulls [ '500']}>
				{ language.screens.bull.rating + ' ' + language.errors [ '500' ]}
			</Text>
		);
	}

	render () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				currency 	= this.props.currency 	,
				arrange 	= layout 	( theme ) 	,
				scenery 	= scene 	( theme ) 	,
				appearance 	= style 	( theme ) 	,
				bulls 		= bull 		( theme ) 	;

		// If we're loading, there is no bull or an error - don't draw Le Bull
		if ( 
			this.props.bull.loading || 
			this.props.bull.error 	||
			this.props.bull.rating === 0
		) {
			return null;
		}

		return (
			<View 	style = { arrange.fill }>
				<View 	
					style = {{
						...arrange.row 	,
						...scenery.header
					}}
				>
					<Image 	
						style 	= { bulls.icon }
						source 	= {{
							uri : images.currencies.large ( this.props.bull.id 	) 
						}}
					/>	
					<Heading 
						theme 	= { theme 															}
						title 	= { this.props.bull.name + ' ( ' +  this.props.bull.symbol + ' )' 	} 
						type 	= '1'
					/>
				</View>
				<View style 	= { bulls.view }>
					<Heading 
						theme 	= { theme 							}
						title 	= { language.screens.bull.rating 	}
						type 	= '2'
					/>
					{ this.rating ()}
					<Text style = { bulls.notice 			}>
						{ language.screens.bull.description }
					</Text>
					<Text style = { bulls.notice }>
						{ language.screens.bull.notice.replace ( '{{placeholder}}' , this.props.bull.competitors )}
					</Text>
				</View>
				<View style = {{
					...bulls.stripe ,
					...{
						marginBottom : 15
					}
				}}>
					<Sections 
						language 	= { language 	}
						theme 		= { theme 		}
						sections 	= {[

							// {
							// 	title 		: language.screens.bull.changes.title 			,
							// 	data 		: [
							// 		{
							// 			property 	: language.screens.bull.changes.hour 	,
							// 			suffix 		: '%' 									,
							// 			type 		: 'highlight' 							,
							// 			value 		: this.props.bull.change.hour
							// 		} 														, 
							// 		{
							// 			property 	: language.screens.bull.changes.day 	,
							// 			suffix 		: '%' 									,
							// 			type 		: 'highlight' 							,
							// 			value 		: this.props.bull.change.day
							// 		} 														,
							// 		{
							// 			property 	: language.screens.bull.changes.week 	,
							// 			suffix 		: '%' 									,
							// 			type 		: 'highlight' 							,
							// 			value 		: this.props.bull.change.week
							// 		}
							// 	]
							// } ,

							{
								title 		: language.screens.bull.values.title 			,
								data 		: [
									{
										prefix 		: currency.symbol 						,
										property 	: currency.names [ language.id ] 		,
										value 		: this.props.bull.prices.fiat
									} , 
									{
										prefix 		: language.denominations.btc.symbol 	,
										property 	: language.denominations.btc.name 		,
										value 		: this.props.bull.prices.btc
									}
								]
							} ,

							// {
							// 	title 		: language.screens.bull.market.title 			,
							// 	data 		: [
							// 		{
							// 			prefix 		: currency.symbol 						,
							// 			property 	: language.screens.bull.market.cap 		,
							// 			value 		: this.props.bull.market
							// 		} 														,
							// 		{
							// 			property 	: language.screens.bull.market.rank 	,
							// 			value 		: numbers.rank ( this.props.bull.rank )
							// 		} 														,
							// 		{
							// 			property 	: language.screens.bull.market.available ,
							// 			value 		: this.props.bull.supply.available
							// 		} 														, 
							// 		{
							// 			property 	: language.screens.bull.market.total 	,
							// 			value 		: this.props.bull.supply.total
							// 		} 														, 
							// 		{
							// 			prefix 		: currency.symbol 						,
							// 			property 	: language.screens.bull.market.volume 	,
							// 			value 		: this.props.bull.volume
							// 		}
							// 	]
							// }

						]} 
					/>
				</View>
			</View>
		);
	}
};
