
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
import 		Bar 			from './bar';
import 		Header 			from './header';
import 		device 			from '../../properties/device';
import 		numbers 		from '../../utilities/numbers';
import 		analytics 		from '../../utilities/analytics';
import 		style 			from '../../styles/graphs';

export default class ChartTree extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.header 	= this.header.bind 		( this 		);
		this.row 		= this.row.bind 		( this 		);
		this.section 	= this.section.bind 	( this 		);
		this.format 	= timeFormat 			( '%B, %Y' 	);
	}

	sections () {

		let sections = [];

		this.props.data.reverse ().forEach (( data , index ) => {

			const 	scaled 	= parseInt 		( this.scales.height ( data [ 1 ]) , 10 ) 	,
					title 	= this.format 	( data [ 0 ]) 								,
					item 	= {
						key 	: data [ 0 ] + ':' + index ,
						value 	: scaled 
					};

			if ( 
				scaled 
				&& ( 
					index === 0 || 
					(
						sections [ sections.length - 1 ] && 
						sections [ sections.length - 1 ].title !== title
					)
				)
			) {
				
				sections.push ({
					data 	: [ item ] ,
					title 	: title
				});
			}

			else if ( scaled && sections [ sections.length - 1 ]) {

				sections [ sections.length - 1 ].data.push ( item );
			}
		});

		return sections;
	}

	header () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;

		let 	data 		= this.props.data 		,
				values 		= {} 					;
	
		values.max 		= max ( data , ( item ) => item [ 1 ]);
		values.min 		= min ( data , ( item ) => item [ 1 ]);
		values.middle 	= ( values.max + values.min 	) / 2;
		values.opening 	= ( values.min + values.middle 	) / 2;
		values.closing 	= ( values.max + values.middle 	) / 2;

		// The GRAPH API DOES NOT SUPPORT MULTI CURRENCY YET
		return ( 
			<AxisY 
				data = {[ 
					'$' + numbers.format ( values.max.toFixed 		( 2 )) ,
					'$' + numbers.format ( values.closing.toFixed 	( 2 )) ,
					'$' + numbers.format ( values.middle.toFixed 	( 2 )) ,
					'$' + numbers.format ( values.opening.toFixed 	( 2 )) ,
					'$' + numbers.format ( values.min.toFixed 		( 2 ))
				]} 
				theme = { theme }
			/> 
		);
	}

	row ({ 
		index 	,
		item 	,
		section
	}) {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	,
				climbing 	= section.data [ index + 1 ] 	? item.value >= section.data [ index + 1 ].value 	: true 				,
				pigment 	= climbing 						? theme.positive 									: theme.negative 	,
				beginning 	= ! index 							,
				end 		= index === section.data.length - 1 ,
				left 		= beginning ? 2 : 1 				,
				right 		= end 		? 2 : 1 				;
			
		return ( 
				<Bar 
					style 		= { appearance.tree.bar }
					color 		= { pigment 			}
					value 		= { item.value 			}
					padding 	= {{
						left 	: left ,
						right 	: right
					}}
				/>
		);
	}

	section ({ section }) {

		const 	theme 		= this.props.theme 				,
				appearance 	= style ( theme ).tree.section 	;

		return (
			<Header 
				style = { appearance 	}
				value = { section.title }
			/>
		);
	}

	setScales () {

		this.scales = {
			
			height : scaleLinear ()
				.domain ([ 
					0 ,
					max ( this.props.data , ( item ) => item [ 1 ])
				])
				.range ([ 
					0 , 
					device.height / 3
				])
		};
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				name 		= this.props.name 		,
				appearance 	= style ( theme ) 		;

		if ( this.props.loading ) {
			
			return (
				<View style = { appearance.tree.loading 	}>
					<Loader
						loading 	= { this.props.loading 	}
						size 		= 'small'
						theme 		= { theme 				}
					/>
				</View>
			);
		}

		if ( this.props.error ) {

			analytics.screen 	( 'graph:' + name + ':500' 	);
			return 				(
				<View style = {{
					height 	: Math.round ( device.height / 3 ) + 8
				}}>
					<Error 
						error 	= { this.props.error 		}
						press 	= { this.props.refresh 		}
						text 	= { language.errors.ajax 	}
						theme 	= { theme 					}
					/>
				</View>
			);
		}

		this.setScales 	();
		
		return 			(
			<View style = { appearance.tree.view }>
				{ this.header ()}
				<SectionList 
					horizontal 						= { true 							}
					initialNumToRender 				= { Math.round ( device.width / 10 	)}
					renderItem 						= { this.row 						}
					renderSectionHeader 			= { this.section 					}
					sections 						= { this.sections 					()}	
					showsHorizontalScrollIndicator 	= { false 							}
					showsVerticalScrollIndicator 	= { false 							}
					style 							= { appearance.tree.chart 			}
				/>
			</View>
		);

	}
};
