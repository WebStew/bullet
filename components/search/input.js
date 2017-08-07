
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TextInput 			,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		strings 				from '../../properties/strings';
import 		style 					from '../../styles/search';
import 		theme 					from '../../styles/theme';

export default connect (

	state => ({
		search : state.search
	})

) ( class SearchInput extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.change 	= this.change.bind 		( this );
		this.deactivate = this.deactivate.bind 	( this );
	}

	change ( term ) {

		this.props.dispatch ( actions.term ( term ));
	}

	deactivate () {

		this.props.dispatch ( actions.active ( false ));
	}

	render () {

		if ( ! this.props.search.active ) {
			
			return null;
		}

		return (
			<View 		style = { style.view 	}>
				<View 	style = { style.field 	}>

					<TextInput 
						autoFocus 				= { true 						}
						placeholder 			= { strings.actions.search 		}
						placeholderTextColor 	= { theme.accents 			[ 2 ]}
						onChangeText 			= { this.change 				}
						selectionColor 			= { theme.primaries 		[ 1 ]}
						style 					= { style.input 				}
						value 					= { this.props.search.term 		}
					/>

					<TouchableOpacity
						style 		= { style.close 		}
						 onPress 	= { this.deactivate 	}>
						<Ionicons
							name 	= { 'ios-close-outline' 	}
							size 	= { 32 						}
							color 	= { theme.primaries 	[ 1 ]}
						/>
					</TouchableOpacity>
					
				</View>
			</View>
		);
	}
});
