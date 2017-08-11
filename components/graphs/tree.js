
import 		React 			from 'react';
import { 	ListView ,
			Text 		,
			View		} 	from 'react-native';
import { 	scaleLinear } 	from 'd3-scale';
import {	timeFormat 	} 	from 'd3-time-format';
import { 	max ,
			min 		} 	from 'd3-array';
import 		Error 			from '../errors/ajax';
import 		Loader 			from '../utilities/loader';
import 		AxisY 			from './axis-y';
import 		time 			from '../../constants/time';
import 		strings 		from '../../properties/strings';
import 		device 			from '../../properties/device';
import 		numbers 		from '../../utilities/numbers';
import 		style 			from '../../styles/graphs';

export default class ChartTree extends React.Component {

	constructor ( props ) {

		super ( props );

		this.datasource = new ListView.DataSource ({
			getSectionData 			: ( data , section 			) => data [ section ] 				,
			getRowData 				: ( data , section , row 	) => data [ section + ':' + row ] 	,
			rowHasChanged 			: ( old , update 			) => old !== update 				,
			sectionHeaderHasChanged : ( old , update 			) => old !== update
		});

		this.header 	= this.header.bind 		( this 		);
		this.row 		= this.row.bind 		( this 		);
		this.section 	= this.section.bind 	( this 		);
		this.format 	= timeFormat 			( '%B, %Y' 	);
	}

	data () {

		let blob 		= {} ,
			sections 	= [] ,
			rows 		= [] ;

		this.props.data.forEach (( item , index ) => {

			let section;
			
			if ( index === 0 || item [ 0 ] - blob [ sections [ 0 ]] > time.month ) {
				
				sections.unshift 	( index );
				rows.unshift 		([]);
				
				blob [ index ] 	= item [ 0 	];
				section 		= index + ':' + index;
			}

			else {

				section = sections [ 0 ] + ':' + index;
			}
			rows [ 0 ].unshift ( index );
			blob [ section ] = parseInt ( this.scales.height ( item [ 1 ]) , 10 );
		});

		return this.datasource.cloneWithRowsAndSections ( blob , sections , rows );
	}

	header () {

		const 	theme 	= this.props.theme;
		let 	data 	= this.props.data ,
				values 	= {};
	
		values.max 		= max ( data , ( item ) => item [ 1 ]);
		values.min 		= min ( data , ( item ) => item [ 1 ]);
		values.middle 	= ( values.max + values.min 	) / 2;
		values.opening 	= ( values.min + values.middle 	) / 2;
		values.closing 	= ( values.max + values.middle 	) / 2;

		return ( 
			<AxisY 
				data = {[ 
					strings.denominations.usd.symbol + numbers.format ( values.max.toFixed 		( 2 )) ,
					strings.denominations.usd.symbol + numbers.format ( values.closing.toFixed 	( 2 )) ,
					strings.denominations.usd.symbol + numbers.format ( values.middle.toFixed 	( 2 )) ,
					strings.denominations.usd.symbol + numbers.format ( values.opening.toFixed 	( 2 )) ,
					strings.denominations.usd.symbol + numbers.format ( values.min.toFixed 		( 2 ))
				]} 
				theme = { theme }
			/> 
		);
	}

	row ( item , section , row , highlight ) {

		const theme = this.props.theme;

		return ( 
			<View 	style = { style ( theme ).tree.bar.view }>
				<View 
					style = {{
						...style ( theme ).tree.bar.highlight , 
						...{
							height : item
						}
					}}
				/>
			</View>
		);
	}

	section ( section ) {

		const theme = this.props.theme;

		return (
			<View style 	= { style ( theme ).tree.section.view }>
				<Text style = { style ( theme ).tree.section.text }>
					{ this.format ( section )}
				</Text>
			</View>
		);
	}

	setScales () {

		const data = this.props.data;

		this.scales = {
			
			height : scaleLinear ()
				.domain ([ 
					0 ,
					max ( data , ( item ) => item [ 1 ])
				])
				.range ([ 
					0 , 
					150 
				])
		};
	}

	render () {

		const theme = this.props.theme;

		if ( this.props.loading ) {

			return (
				<View style = { style ( theme ).tree.loading }>
					<Loader
						loading 	= { this.props.loading 	}
						size 		= 'small'
						theme 		= { theme 				}
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
					theme 	= { theme 				}
				/>
			);
		}

		this.setScales ();

		return (
			
			<View style = { style ( theme ).tree.view }>

				{ this.header ()}

				<ListView
					contentOffset 					= {{ x : 1 							}}
					enableEmptySections 			= { true 							}
					dataSource 						= { this.data 						()}
					horizontal 						= { true 							}
					initialNumToRender 				= { Math.round ( device.width / 5 	)}
					renderRow 						= { this.row 						}
					renderSectionHeader  			= { this.section 					}
					showsHorizontalScrollIndicator 	= { false 							}
					showsVerticalScrollIndicator 	= { false 							}
					style 							= { style ( theme ).tree.chart 		}
					theme 							= { theme 							}
				/>

			</View>
		);

	}
};
