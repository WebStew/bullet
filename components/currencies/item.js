
import 		React 					from 'react';
import { 	Image 				,
			Text 				, 
			TouchableOpacity 	,
			View				} 	from 'react-native';
import 		Integer 				from '../utilities/integer';
import 		list 					from '../../styles/list';
import 		style 					from '../../styles/currencies';
import 		images 					from '../../api/images';
import 		numbers 				from '../../utilities/numbers';
import 		strings 				from '../../properties/strings';

export default class Item extends React.Component {

	constructor ( props ) {

		super ( props );

		this.detail = this.detail.bind ( this );
	}

	detail () {

		this.props.navigation.navigate ( 
			'Detail' , 
			{
				currency : this.props.currency
			}
		);
	}

	render () {

		const currency = this.props.currency;

		return (

			<View>
				<TouchableOpacity 
					style 	= {{
						...list.row 		,
						...this.props.style
					}} 
					onPress = { this.detail 	}
				>

					<View style = {{
						...list.cell ,
						...style.head 
					}}>
						<Image 	
							style 	= { style.icon }
							source 	= {{
								uri : images.currencies.small ( currency.id ) 
							}}
						/>
						
						<Text 
							numberOfLines 	= { 1 }
							style 			= {{
								...list [ 'cell-text' ] ,
								...style.name
							}}
						>
							{ currency.name }
						</Text>
					</View>

					<Text 
						numberOfLines 	= { 1 }
						style = {{
							...list.cell 			,
							...list [ 'cell-text' ] ,
							...style.text
						}}
					>
						{ numbers.format ( currency.rating )}
					</Text>

					<Integer 
						style 	= {{
							...list.cell 			,
							...list [ 'cell-text' ] ,
							...style.change
						}}
						suffix 	= '%'
						type 	= 'highlight' 
						value 	= { currency.change.day }
					/>

					<Text 
						numberOfLines 	= { 1 }
						style = {{
							...list.cell 			,
							...list [ 'cell-text' ] ,
							...style.price
						}}
					>
						{ strings.denominations.usd.symbol + numbers.format ( currency.prices.usd )}
					</Text>
						
				</TouchableOpacity>
			</View>
		);
	}
};