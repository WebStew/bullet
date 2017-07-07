
import 		React 		from 'react';
import { 	ListView } 	from 'react-native';

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

		// If we're loading the content or have an empty list
		if ( this.props.loading || Object.keys ( this.props.items ).length === 0 ) {
			return null;
		}

		return (
			
			<ListView
				enableEmptySections = { true 																							}
				dataSource 			= { this.datasource.cloneWithRows ( this.props.items 												)}
				renderRow 			= {( items , section , row , highlight ) => this.props.setRow ( items , section , row , highlight 	)}
				renderSeparator 	= { this.props.setSeparator 																		}
				style 				= { this.props.style 																				}
			/>
		);
	}	
};