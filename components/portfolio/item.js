
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
				item : this.props.data
			}
		);
	}

	render () {

		const 	currency 	= this.props.currency 	,
				item 		= this.props.item 		,
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
					onPress = { this.detail }
				>
					<View style = {{
						...items.cell ,
						...appearance.head 
					}}>
						<Image 	
							style 	= { appearance.icon }
							source 	= {{
								uri : images.currencies.medium ( item.id ) 
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
							{ item.name }
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
						{ numbers.format ( item.amount	)}
					</Text>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.cell
						}}>
						{ item.price ? currency.symbol + numbers.format ( item.price.toFixed ( 2 )) : language.errors [ 500 ]}
					</Text>
					<Text 
						numberOfLines 	= { 1 }
						style 			= {{
							...items.cell 				,
							...items [ 'cell-text' ] 	,
							...appearance.cell
						}}
					>
						{ item.total ? currency.symbol + numbers.format ( item.total.toFixed ( 2 )) : '0' }
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
};