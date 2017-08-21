
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
import 		analytics 				from '../../utilities/analytics';

export default class Item extends React.Component {

	constructor ( props ) {

		super ( props );

		this.detail = this.detail.bind ( this );
	}

	detail () {

		analytics.event 				( 'currencies' , 'navigate' , this.props.currency.name );
		this.props.navigation.navigate 	( 
			'Detail' , 
			{
				currency : this.props.currency
			}
		);
	}

	render () {

		const 	currency 	= this.props.currency 	,
				language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		return (

			<View>
				<TouchableOpacity 
					style 	= {{
						...list ( theme ).row 	,
						...this.props.style
					}} 
					onPress = { this.detail 	}
				>

					<View style = {{
						...list 	( theme ).cell ,
						...style 	( theme ).head 
					}}>
						<Image 	
							style 	= { style ( theme ).icon }
							source 	= {{
								uri : images.currencies.small ( currency.id ) 
							}}
						/>
						
						<Text 
							numberOfLines 	= { 1 }
							style 			= {{
								...list 	( theme ) [ 'cell-text' ] ,
								...style 	( theme ).name
							}}
						>
							{ currency.name }
						</Text>
					</View>

					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...list 	( theme ).cell 				,
							...list 	( theme ) [ 'cell-text' ] 	,
							...style 	( theme ).text
						}}
					>
						{ currency.rating ? numbers.format ( currency.rating ) : language.errors [ 500 ]}
					</Text>

					<Integer 
						language 	= { language 			}
						style 		= {{
							...list 	( theme ).cell 				,
							...list 	( theme ) [ 'cell-text' ] 	,
							...style 	( theme ).change
						}}
						suffix 		= '%'
						theme 		= { theme 				}
						type 		= 'highlight' 
						value 		= { currency.change.day }
					/>

					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...list 	( theme ).cell 				,
							...list 	( theme ) [ 'cell-text' ] 	,
							...style 	( theme ).price
						}}
					>
						{ currency.prices.usd ? language.denominations.usd.symbol + numbers.format ( currency.prices.usd ) : language.errors [ 500 ]}
					</Text>
						
				</TouchableOpacity>
			</View>
		);
	}
};