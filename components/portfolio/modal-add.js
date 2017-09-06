
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
		this.reset 	= this.reset.bind 	( this );
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

	remove ( portfolioed ) {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	;

		if ( ! portfolioed ) {

			return null;
		}

		return (

			<Button
				press 	= { this.reset  			}
				theme 	= { theme 					}
				type 	= 'tertiary'
				value 	= { language.actions.remove }
			/>
		)
	}

	reset () {

			analytics.event 	( 'portfolio' , 'remove' , this.props.currency.name );
			this.props.reset 	();
			this.props.dispatch ( 
				actions.delete 	( this.props.currency.id )
			);
	}

	set () {

		analytics.event 	( 'portfolio' , 'add' 	, this.props.currency.name 	);
		this.props.reset 	();
		this.props.dispatch ( 
			actions.save 	( 
				this.props.currency.id 	, 
				this.state.amount 		,
				this.props.currency.name
			)
		);
	}

	componentWillMount () {
		
		const 	currency 	= this.props.currency ,
				portfolioed = this.props.portfolio.items.find (( item , index ) => item.id === currency.id );
			
		if ( portfolioed ) {

			this.setState ({
				amount : portfolioed.amount
			});
		}
	}

	render () {

		const 	language 	= this.props.language 																,
				theme 		= this.props.theme 																	,
				currency 	= this.props.currency 																,
				portfolioed = this.props.portfolio.items.find (( item , index ) => item.id === currency.id ) 	,
				action 		= portfolioed ? language.actions.update : language.actions.add 						,
				appearance 	= style ( theme ) 																	;

		return (
			<Modal 
				animationIn 		= 'zoomIn'
				animationOut 		= 'zoomOut'
				backdropColor 		= { theme.chrome 		}
				onBackButtonPress 	= { this.props.reset 	}
				onBackdropPress 	= { this.props.reset 	}
				isVisible 			= { this.props.active 	}>
				<View 	style 		= { appearance.view 	}>
					<Heading 
						title 		= { action 	}
						theme 		= { theme 	}
						type 		= '2'
					/>
					<Text style 	= { appearance.text }>
						{ language.screens.portfolio.description.replace ( '{{placeholder}}' , currency.name )}
					</Text>
					<View 			style 	= { appearance.field 			}>
						<View 		style 	= { appearance.label.view 		}>
							<Text 	style 	= { appearance.label.text 		}>
								{ language.screens.portfolio.headers.amount }
							</Text>
						</View>
						<TextInput 
							onBlur 			= { this.blur 			}
							onChangeText  	= { this.amount 		}
							onFocus 		= { this.focus 			}
							keyboardType 	= 'numeric'
							selectionColor 	= { theme.secondary 	}
							style 			= { appearance.input 	}
							value 			= { this.state.amount 	}
						/>
					</View>
					<Button
						press 	= { this.set  	}
						theme 	= { theme 		}
						value 	= { action 		}
					/>
					{ this.remove ( portfolioed )}
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