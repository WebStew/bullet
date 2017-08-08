
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TextInput 			,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		strings 				from '../../properties/strings';
import 		theme 					from '../../configuration/theme';
import 		style 					from '../../styles/search';

export default connect (

	state => ({
		search : state.search
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

		if ( ! this.props.search.on ) {
			
			return null;
		}

		return (
			<View 		style = { style.view 	}>
				<View 	style = { style.field 	}>

					<TextInput 
						autoFocus 				= { true 						}
						placeholder 			= { strings.actions.search 		}
						placeholderTextColor 	= { theme.accents 			[ 2 ]}
						onChangeText 			= { this.set 					}
						selectionColor 			= { theme.primaries 		[ 1 ]}
						style 					= { style.input 				}
						value 					= { this.props.search.value 	}
					/>

					<TouchableOpacity
						style 		= { style.close 			}
						 onPress 	= {() => this.set 	( null )}
					>
						<Ionicons
							name 	= { 'ios-refresh-outline' 	}
							size 	= { 32 						}
							color 	= { theme.primaries 	[ 1 ]}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style 		= { style.close 	}
						 onPress 	= { this.off 		}
					>
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
