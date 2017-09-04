
import 		React 				from 'react';
import { 	Text 			,
			TextInput 		,
			View 			} 	from 'react-native';
import 		Modal 				from 'react-native-modal'
import 		actions 			from '../../actions/portfolio';
import 		Button 				from '../utilities/button';
import 		Heading 			from '../utilities/headings';
import 		analytics 			from '../../utilities/analytics';
import 		style 				from '../../styles/modal';

export default class Dialogue extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.amount = this.amount.bind 	( this );
		this.blur 	= this.blur.bind 	( this );
		this.focus 	= this.focus.bind 	( this );
		this.set 	= this.set.bind 	( this );
		this.state 	= {
			amount 	: '0'
		};
	}

	amount ( value ) {

		this.setState ({
			amount : value 
		});
	}

	blur () {

		if ( ! this.state.amount ) {

			this.setState ({
				amount : '0'
			});
		}
	}

	focus () {
		
		if ( this.state.amount === '0' ) {

			this.setState ({
				amount : ''
			});
		}
	}

	set () {

		analytics.event 	( 'portfolio' , 'add' 	, this.props.currency.name 	);
		this.props.dispatch ( 
			actions.save 	( this.props.currency.id , this.state.amount 		)
		);
		this.props.reset 	();
	}

	render () {

		const 	language 	= this.props.language 	,
				theme 		= this.props.theme 		,
				currency 	= this.props.currency 	;

		return (
			<Modal 
				animationIn 		= 'zoomIn'
				animationOut 		= 'zoomOut'
				backdropColor 		= { theme.chrome 			}
				onBackButtonPress 	= { this.props.reset 		}
				onBackdropPress 	= { this.props.reset 		}
				isVisible 			= { this.props.active 		}>
				<View 	style 		= { style ( theme ).view 	}>
					<Heading 
						title 		= { language.screens.detail.portfolio 	}
						theme 		= { theme 								}
						type 		= '2'
					/>
					<Text style 	= { style ( theme ).text }>
						{ language.screens.portfolio.description.replace ( '{{placeholder}}' , currency.name )}
					</Text>
					<View 			style 	= { style ( theme ).field 		}>
						<View 		style 	= { style ( theme ).label.view 	}>
							<Text 	style 	= { style ( theme ).label.text 	}>
								{ language.labels.amount 					}
							</Text>
						</View>
						<TextInput 
							onBlur 			= { this.blur 					}
							onChangeText  	= { this.amount 				}
							onFocus 		= { this.focus 					}
							keyboardType 	= 'numeric'
							selectionColor 	= { theme.secondary 			}
							style 			= { style ( theme ).input 		}
							value 			= { this.state.amount 			}
						/>
					</View>
					<Button
						press 	= { this.set 				}
						theme 	= { theme 					}
						value 	= { language.actions.add 	}
					/>
					<Button
						press 	= { this.props.reset 		}
						theme 	= { theme 					}
						value 	= { language.actions.cancel }
						type 	= 'secondary'
					/>
				</View>
			</Modal>
		);
	}
};