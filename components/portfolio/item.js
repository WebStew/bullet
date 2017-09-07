
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

export default class Item extends React.PureComponent {

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
							numberOfLines 	= { 1 }
							ellipsizeMode 	= 'tail'
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
							...appearance.cell
						}}
					>
						{ numbers.format ( currency.amount		)}
					</Text>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.cell
						}}>
						{ currency.price ? language.denominations.usd.symbol + numbers.format ( currency.price ) : language.errors [ 500 ]}
					</Text>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.cell
						}}
					>
						{ currency.total ? language.denominations.usd.symbol + numbers.format ( currency.total.toFixed ( 2 )) : '0'}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
};