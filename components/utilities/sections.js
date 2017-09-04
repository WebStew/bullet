
import 		React 			from 'react';
import { 	Text 	,
			View 		} 	from 'react-native';
import 		Heading 		from '../utilities/headings';
import 		Integer 		from '../utilities/integer';
import 		style 			from '../../styles/section';
import 		layout 			from '../../styles/layout';

export default class Sections extends React.Component {

	sections () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		;
	
		return this.props.sections.map (( section , index ) => {

			let stripe 	= index % 2 === 0 ? style ( theme ).body : { ...style ( theme ).body , ...style ( theme ).stripe } ,
				data 	= section.data.map (( item , index ) => {

					return ( 
						<View 	
							style 	= { layout ( theme ).row 	} 
							key 	= { index 					}
						>
							<Text 
								style = {{
									...layout 	( theme ).fill ,
									...style 	( theme ).row
								}}
							>
								{ item.property }
							</Text>	
							<Integer 
								language 	= { language 	}
								prefix 		= { item.prefix }
								style 		= {{
									...layout 	( theme ).fill ,
									...style 	( theme ).row
								}}
								suffix 		= { item.suffix }
								theme 		= { theme 		}
								type 		= { item.type 	}
								value 		= { item.value 	}
							/>
						</View>
					);
				}); 

			return (

				<View 	key 	= { index 			}
						style 	= { stripe 			}
				>
					<Heading 
						theme 	= { theme 			}
						title 	= { section.title 	}
						type 	= '2'
					/>
					{ data }
				</View>
			);

		});

	}

	render () {

		const theme = this.props.theme;

		return (
			<View style = { style ( theme ).view }>
				{ this.sections ()}
			</View>
		);
	}
};
