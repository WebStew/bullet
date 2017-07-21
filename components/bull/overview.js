
import 		React 			from 'react';
import { 	Image 		,
			Text 		,
			View 		} 	from 'react-native';
import 		Heading 		from '../utilities/headings';
import 		Sections 		from '../utilities/sections';
import 		strings 		from '../../properties/strings';
import 		layout 			from '../../styles/layout';
import 		style 			from '../../styles/section';
import 		scene 			from '../../styles/scene';
import 		bull 			from '../../styles/bull';
import 		images 			from '../../api/images';
import 		numbers 		from '../../utilities/numbers';

export default class Overview extends React.Component {

	render () {

		// If we're loading, there is no bull or an error - don't draw Le Bull
		if ( 
			this.props.bull.loading || 
			this.props.bull.error 	||
			this.props.bull.rating === 0
		) {
			return null;
		}
		
		return (

			<View 	style = { layout.fill 	}>
				<View 	
					style = {{
						...layout.row ,
						...scene.header
					}}
				>

					<Image 	
						style 	= { bull.icon }
						source 	= {{
							uri : images.currencies.large ( this.props.bull.id ) 
						}}
					/>
					
					<Heading 
						title 	= { this.props.bull.name + ' ( ' +  this.props.bull.symbol + ' )' } 
						type 	= '1'
					/>

				</View>
				
				<View style 	= {{
					...bull.view 	,
					...style.default 			
				}}>
					<Heading 
						title 	= { strings.screens.bull.rating }
						type 	= '2'
					/>
					<Text style = { bull.rating 					}>
						{ numbers.format ( this.props.bull.rating 	)}
					</Text>
				</View>

				<Sections sections = {[

					{
						title 		: strings.screens.bull.changes.title 		,
						data 		: [
							{
								property 	: strings.screens.bull.changes.hour ,
								suffix 		: '%' 								,
								type 		: 'highlight' 						,
								value 		: this.props.bull.change.hour
							} 													, 
							{
								property 	: strings.screens.bull.changes.day 	,
								suffix 		: '%' 								,
								type 		: 'highlight' 						,
								value 		: this.props.bull.change.day
							} 													,
							{
								property 	: strings.screens.bull.changes.week ,
								suffix 		: '%' 								,
								type 		: 'highlight' 						,
								value 		: this.props.bull.change.week
							}
						]
					} ,

					{
						title 		: strings.screens.bull.values.title 		,
						data 		: [
							{
								prefix 		: strings.denominations.usd.symbol 	,
								property 	: strings.denominations.usd.name 	,
								value 		: this.props.bull.prices.usd
							} , 
							{
								prefix 		: strings.denominations.btc.symbol 	,
								property 	: strings.denominations.btc.name 	,
								value 		: this.props.bull.prices.btc
							}
						]
					} ,

					{
						title 		: strings.screens.bull.market.title 			,
						data 		: [
							{
								prefix 		: strings.denominations.usd.symbol 		,
								property 	: strings.screens.bull.market.cap 		,
								value 		: this.props.bull.market.usd
							} 														,
							{
								property 	: strings.screens.bull.market.rank 		,
								value 		: numbers.rank ( this.props.bull.rank )
							} 														,
							{
								property 	: strings.screens.bull.market.available ,
								value 		: this.props.bull.supply.available
							} 														, 
							{
								property 	: strings.screens.bull.market.total 	,
								value 		: this.props.bull.supply.total
							} 														, 
							{
								prefix 		: strings.denominations.usd.symbol 		,
								property 	: strings.screens.bull.market.volume 	,
								value 		: this.props.bull.volume.usd
							}
						]
					}

				]} />
				
			</View>
		);
	}
};
