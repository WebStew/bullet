
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

		const sticky = this.props.fixed ? [ 0 ] : false;

		// If we're loading the content or have an empty list
		if ( this.props.loading || this.props.items.length === 0 ) {
			return null;
		}

		return (
			
			<ListView
				enableEmptySections = { true 																						}
				dataSource 			= { this.datasource.cloneWithRows ( this.props.items 											)}
				renderHeader 		= { this.props.header }
				renderRow 			= {( items , section , row , highlight ) => this.props.row ( items , section , row , highlight 	)}
				renderSeparator 	= { this.props.separator 																		}
				refreshControl 		= { this.props.refresh 																			}
				stickyHeaderIndices = { sticky 																						}
				style 				= {{
					...style.body 	,
					...this.props.style
				}}
			/>
		);
	}	
};