
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TextInput 			,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		style 					from '../../styles/search';

export default connect (

	state => ({
		language 	: state.language 	,
		search 		: state.search 		,
		theme 		: state.theme
	})

) ( class SearchInput extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.set = this.set.bind ( this );
		this.off = this.off.bind ( this );
	}

	set ( term ) {

		this.props.dispatch ( actions.set ( term ));
	}

	off () {

		this.props.dispatch ( actions.on ( false ));
	}

	render () {

		const 	language 	= this.props.language ,
				theme 		= this.props.theme 		;

		if ( ! this.props.search.on ) {
			
			return null;
		}

		return (
			<View 		style = { style ( theme ).view 	}>
				<View 	style = { style ( theme ).field }>

					<TouchableOpacity
						style 		= { style ( theme ).refresh }
						 onPress 	= {() => this.set 	( null )}
					>
						<Ionicons
							name 	= { 'ios-refresh-outline' 	}
							size 	= { 32 						}
							color 	= { theme.secondary 		}
						/>
					</TouchableOpacity>

					<TextInput 
						autoFocus 				= { true 						}
						placeholder 			= { language.actions.search 	}
						placeholderTextColor 	= { theme.disabled 				}
						onChangeText 			= { this.set 					}
						selectionColor 			= { theme.secondary 			}
						style 					= { style ( theme ).input 		}
						value 					= { this.props.search.value 	}
					/>

					<TouchableOpacity
						style 		= { style ( theme ).close 	}
						 onPress 	= { this.off 				}
					>
						<Ionicons
							name 	= { 'ios-close-outline' 	}
							size 	= { 32 						}
							color 	= { theme.secondary 		}
						/>
					</TouchableOpacity>
					
				</View>
			</View>
		);
	}
});
