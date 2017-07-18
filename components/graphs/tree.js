
import 		React 			from 'react';
import { 	ListView 	,
			View		} 	from 'react-native';
import 		Error 			from '../errors/ajax';
import 		Loader 			from '../utilities/loader';
import 		AxisY 			from './axis-y';
import { 	scaleLinear ,
			scaleTime 	} 	from 'd3-scale';
//import {	timeMonth 	} 	from 'd3-time';
import { 	max ,
			min 		} 	from 'd3-array';
import 		strings 		from '../../properties/strings';
import 		numbers 		from '../../utilities/numbers';
import 		style 			from '../../styles/graphs';

export default class ChartTree extends React.Component {

	constructor ( props ) {

		super ( props );

		this.header 	= this.header.bind 	( this );
		this.row 		= this.row.bind 	( this );
		this.datasource = new ListView.DataSource ({
			getRowData 		: ( object 	, section , row ) => object [ section ] [ row ] ,
			rowHasChanged 	: ( current , updated 		) => current !== updated
		});
	}

	header () {

		let data 	= this.props.data.usd ,
			values 	= {
				max : max ( data , ( item ) => item [ 1 ]) 	,
				min : min ( data , ( item ) => item [ 1 ])
			};

		return ( 
			<AxisY 
				data = {[ 
					strings.denominations.usd.symbol + numbers.format ( 	values.max.toFixed ( 2 						)) ,
					strings.denominations.usd.symbol + numbers.format ((( 	values.max + values.min ) / 2 ).toFixed ( 2 )) ,
					strings.denominations.usd.symbol + numbers.format ( 	values.min.toFixed ( 2 						))
				]} 
			/> 
		);
	}

	row ( item , section , row , highlight ) {

		return ( 
			<View 
				style = {{
					...style.tree.bar , 
					...{ 
						height : this.scales.height ( item [ 1 ])
					}
				}}
			/>
		);
	}

	setScales ( data ) {

		this.scales = {
			
			height : scaleLinear ()
				.domain ([ 
					0 ,
					max ( data , ( item ) => item [ 1 ])
				])
				.range ([ 
					0 , 
					150 
				]) ,
			
				width : scaleTime ()
					.domain ([
						new Date( data [ 0 ] [ 0 ]) , 
						new Date( data [ data.length - 1 ] [ 0 ])
					])
		};
	}

	render () {

		if ( this.props.loading ) {

			return (
				<View style = { style.tree.loading }>
					<Loader
						loading 	= { this.props.loading }
						size 		= 'small'
					/>
				</View>
			);
		}

		if ( this.props.error ) {
			
			return (
				<Error 
					error 	= { this.props.error 	}
					press 	= { this.props.refresh 	}
					text 	= { strings.errors.ajax }
				/>
			);
		}

		this.setScales ( this.props.data.usd );		

		return (
			<View>

				<ListView
					alwaysBounceVertical 			= { false 																}
					contentContainerStyle 			= { style.tree.align 													}
					dataSource 						= { this.datasource.cloneWithRows ( this.props.data.usd.reverse 	())}
					horizontal 						= { true 																}
					renderHeader 					= { this.header 														}
					showsHorizontalScrollIndicator 	= { false 																}
					showsVerticalScrollIndicator 	= { false 																}
					style 							= { style.tree.chart 													}
					renderRow 						= { this.row 															}
				/>
			</View>
		);

	}
};
