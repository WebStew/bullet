
import 		React 			from 'react';
import { 	ListView 	} 	from 'react-native';
import 		style 			from '../../styles/list';

export default class List extends React.Component {

	constructor ( props ) {

		super ( props );

		// All datasources are flat maps
		this.datasource = new ListView.DataSource ({
			getRowData 		: ( object 	, section , row ) => object [ section ] [ row ] ,
			rowHasChanged 	: ( current , updated 		) => current !== updated
		});
	}

	render () {

		const 	sticky 		= this.props.fixed ? [ 0 ] : false 	,
				theme 		= this.props.theme 					,
				appearance 	= style ( theme ) 					;

		return (
			
			<ListView
				enableEmptySections = { true 																						}
				dataSource 			= { this.datasource.cloneWithRows ( this.props.items 											)}
				renderHeader 		= { this.props.header 																			}
				renderRow 			= {( items , section , row , highlight ) => this.props.row ( items , section , row , highlight 	)}
				renderSeparator 	= { this.props.separator 																		}
				refreshControl 		= { this.props.refresh 																			}
				stickyHeaderIndices = { sticky 																						}
				style 				= {{
					...appearance.body ,
					...this.props.style
				}}
			/>
		);
	}	
};