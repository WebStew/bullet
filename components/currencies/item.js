
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

export default class Item extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.detail = this.detail.bind ( this );
	}

	detail () {

		this.props.navigation.navigate 	( 
			'detail' , 
			{
				currency : this.props.currency
			}
		);
	}

	render () {

		const 	currency 	= this.props.currency 	,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				items 		= list 	( theme ) 		,
				appearance 	= style ( theme ) 		;

		return (

			<View>
				<TouchableOpacity 
					style 	= {{
						...items.row 	,
						...this.props.style
					}} 
					onPress = { this.detail 	}
				>
					<View style = {{
						...items.cell ,
						...appearance.head 
					}}>
						<Image 	
							style 	= { appearance.icon }
							source 	= {{
								uri : images.currencies.small ( currency.id ) 
							}}
						/>
						
						<Text 
							ellipsizeMode 	= 'tail'
							numberOfLines 	= { 1 }
							style 			= {{
								...items [ 'cell-text' ] ,
								...appearance.name
							}}
						>
							{ currency.name }
						</Text>
					</View>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.text
						}}
					>
						{ currency.rating ? numbers.format ( currency.rating ) : language.errors [ 500 ]}
					</Text>
					<Integer 
						language 	= { language 			}
						style 		= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.text
						}}
						suffix 		= '%'
						theme 		= { theme 				}
						type 		= 'highlight' 
						value 		= { currency.change.day }
					/>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.price
						}}
					>
						{ currency.prices.usd ? language.denominations.usd.symbol + numbers.format ( currency.prices.usd ) : language.errors [ 500 ]}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
};