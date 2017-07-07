
import 		React 					from 'react';
import { 	Image 				,
			Text 				, 
			TouchableOpacity 	,
			View				} 	from 'react-native';
import 		Integer 				from '../utilities/integer';
import style 						from '../../styles/currencies';
import images 						from '../../api/images';

export default class Item extends React.Component {

	constructor ( props ) {

		super ( props );

		this.setCurrency = this.setCurrency.bind ( this );
	}

	setCurrency () {

		console.log ( this.props )
		// Actions [ routes.catalogue.detail ] ({
		// 	product : this.props.product
		// });
	}

	render () {

		const currency = this.props.currency;

		return (

			<View>
				<TouchableOpacity 
					style 	= {{
						...style.item 		,
						...this.props.style
					}} 
					onPress = { this.setCurrency 	}
				>
				
					<Image 	
						style 	= { style.icon }
						source 	= {{
							uri : images.currencies.icon ( currency.id ) 
						}}
					/>
					
					<Text style = { style.name }>
						{ currency.name }
					</Text>

					<Text style = { style.text }>
						{ currency.rating }
					</Text>

					<Integer 
						type 	= 'highlight' 
						value 	= { currency.change.day } 
					/>

					<Text style = { style.price }>
						{ currency.prices.usd }
					</Text>
						
				</TouchableOpacity>
			</View>
		);
	}
};