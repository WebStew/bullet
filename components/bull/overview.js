
import 		React 			from 'react';
import { 	Image 		,
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

	render () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	;

		// If we're loading, there is no bull or an error - don't draw Le Bull
		if ( 
			this.props.bull.loading || 
			this.props.bull.error 	||
			this.props.bull.rating === 0
		) {
			return null;
		}

		return (

			<View 	style = { layout ( theme ).fill }>
				<View 	
					style = {{
						...layout 	( theme ).row 	,
						...scene 	( theme ).header
					}}
				>

					<Image 	
						style 	= { bull ( theme ).icon 						}
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
									value 		: this.props.bull.change.hour
								} 														, 
								{
									property 	: language.screens.bull.changes.day 	,
									suffix 		: '%' 									,
									type 		: 'highlight' 							,
									value 		: this.props.bull.change.day
								} 														,
								{
									property 	: language.screens.bull.changes.week 	,
									suffix 		: '%' 									,
									type 		: 'highlight' 							,
									value 		: this.props.bull.change.week
								}
							]
						} ,

						{
							title 		: language.screens.bull.values.title 			,
							data 		: [
								{
									prefix 		: language.denominations.usd.symbol 	,
									property 	: language.denominations.usd.name 		,
									value 		: this.props.bull.prices.usd
								} , 
								{
									prefix 		: language.denominations.btc.symbol 	,
									property 	: language.denominations.btc.name 		,
									value 		: this.props.bull.prices.btc
								}
							]
						} ,

						{
							title 		: language.screens.bull.market.title 			,
							data 		: [
								{
									prefix 		: language.denominations.usd.symbol 	,
									property 	: language.screens.bull.market.cap 		,
									value 		: this.props.bull.market.usd
								} 														,
								{
									property 	: language.screens.bull.market.rank 	,
									value 		: numbers.rank ( this.props.bull.rank )
								} 														,
								{
									property 	: language.screens.bull.market.available ,
									value 		: this.props.bull.supply.available
								} 														, 
								{
									property 	: language.screens.bull.market.total 	,
									value 		: this.props.bull.supply.total
								} 														, 
								{
									prefix 		: language.denominations.usd.symbol 	,
									property 	: language.screens.bull.market.volume 	,
									value 		: this.props.bull.volume.usd
								}
							]
						}

					]} 
				/>

				<View style 	= {{
					...bull 	( theme ).view 	,
					...style 	( theme ).body			
				}}>
					<Heading 
						theme 	= { theme 							}
						title 	= { language.screens.bull.rating 	}
						type 	= '2'
					/>

					<Text style = { bull ( theme ).notice 															}>
						{ language.screens.bull.notice.replace ( '{{placeholder}}' , this.props.bull.competitors 	)}
					</Text>

					<Text style = { bull ( theme ).rating 			}>
						{ this.props.bull.rating ? numbers.format ( this.props.bull.rating 	) : language.errors [ '500' ]}
					</Text>
				</View>
			</View>
		);
	}
};
