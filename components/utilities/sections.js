
import 		React 			from 'react';
import { 	Text 	,
			View 		} 	from 'react-native';
import 		Heading 		from '../utilities/headings';
import 		Integer 		from '../utilities/integer';
import 		style 			from '../../styles/section';
import 		layout 			from '../../styles/layout';

export default class Sections extends React.Component {

	sections () {
	
		return this.props.sections.map (( section , index ) => {

			let stripe 	= index % 2 === 0 ? { ...style.default , ...style.stripe } : style.default ,
				data 	= section.data.map (( item , index ) => {

					return ( 
						<View 	
							style 	= { layout.row 	} 
							key 	= { index 	}
						>
							<Text 
								style = {{
									...layout.fill ,
									...style.row
								}}
							>
								{ item.property }
							</Text>	
							<Integer 
								prefix 	= { item.prefix }
								style 	= {{
									...layout.fill ,
									...style.row
								}}
								suffix 	= { item.suffix }
								type 	= { item.type 	}
								value 	= { item.value 	}
							/>
						</View>
					);
				}); 

			return (

				<View 	key 	= { index 			}
						style 	= { stripe }>
					<Heading 
						title 	= { section.title 	}
						type 	= '2'
					/>
					{ data }
				</View>
			);

		});

	}

	render () {

		return (
			<View>
				{ this.sections ()}
			</View>
		);
	}
};
