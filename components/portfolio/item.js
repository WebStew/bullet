
import 		React 					from 'react';
import { 	Image 				,
			Text 				, 
			TouchableOpacity 	,
			View				} 	from 'react-native';
import 		Integer 				from '../utilities/integer';
import 		list 					from '../../styles/list';
import 		style 					from '../../styles/portfolio';
import 		images 					from '../../api/images';
import 		numbers 				from '../../utilities/numbers';

export default class Item extends React.Component {

	constructor ( props ) {

		super ( props );

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

		const 	currency 	= this.props.details 	,
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
							...style 	( theme ).cell
						}}
					>
						{ numbers.format ( currency.amount		)}
					</Text>
		
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...list 	( theme ).cell 				,
							...list 	( theme ) [ 'cell-text' ] 	,
							...style 	( theme ).cell
						}}>
						{ currency.price ? language.denominations.usd.symbol + numbers.format ( currency.price ) : language.errors [ 500 ]}
					</Text>
		
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...list 	( theme ).cell 				,
							...list 	( theme ) [ 'cell-text' ] 	,
							...style 	( theme ).cell
						}}
					>
						{ currency.total ? language.denominations.usd.symbol + numbers.format ( currency.total.toFixed ( 2 )) : language.errors [ 500 ]}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
};