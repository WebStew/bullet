
import 		React 			from 'react';
import { 	SectionList ,
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

		this.header 	= this.header.bind 		( this 		);
		this.row 		= this.row.bind 		( this 		);
		this.section 	= this.section.bind 	( this 		);
		this.format 	= timeFormat 			( '%B, %Y' 	);
	}

	data () {

		let mydata = [];

		this.props.data.forEach ( function ( item , index ) {

			if ( index === 0 || item [ 0 ] - mydata [ mydata.length - 1 ].title > time.month ) {

				mydata .push ({
					data 	: [ item 	[ 1 ]] ,
					title 	: item 		[ 0 ]
				})
			}

			else {
				mydata [ mydata.length - 1 ].data.unshift ( item [ 1 ])
			}
		});

		return mydata.reverse ().slice ( 0 , 24 );
	}

	header () {

		let data 	= this.props.data ,
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
			/> 
		);
	}

	row ({ item }) {

		return ( 
			<View 	style = { style.tree.bar.view }>
				<View 
					style = {{
						...style.tree.bar.highlight , 
						...{
							height : this.scales.height ( item )
						}
					}}
				/>
			</View>
		);
	}

	section ({ section }) {

		return (
			<View style 	= { style.tree.section.view }>
				<Text style = { style.tree.section.text }>
					{ this.format ( section.title )}
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

		this.setScales ();

		return (
			<View style = { style.tree.view }>

				{ this.header ()}

				<SectionList
					contentOffset 					= {{ x : 1 							}}
					horizontal 						= { true 							}
					initialNumToRender 				= { Math.round ( device.width / 5 	)}
					keyExtractor 					= {() =>  Math.random 				()}
					renderItem 						= { this.row 						}
					renderSectionHeader 			= { this.section 					}
					sections 						= { this.data 						()}
					showsHorizontalScrollIndicator 	= { false 							}
					showsVerticalScrollIndicator 	= { false 							}
					style 							= { style.tree.chart 				}
				/>

			</View>
		);

	}
};
