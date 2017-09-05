
import 		React 			from 'react';
import { 	Text 		,
			View 		} 	from 'react-native';
import { 	Ionicons 	} 	from '@expo/vector-icons';
import 		layout 			from '../../styles/layout';
import 		style 			from '../../styles/errors';
import 		bull 			from '../../styles/bull';

export default class NotFound extends React.Component {

	render () {

		const 	theme 		= this.props.theme 		,
				language 	= this.props.language 	,
				appearance 	= style 	( theme ) 	,
				arrange 	= layout 	( theme ) 	;

		// Only render if the bull rating is zero
		if (
			this.props.bull.loading || 
			this.props.bull.error 	|| 
			this.props.bull.rating 	!== 0 
		) {
			return null;
		}

		return (
			<View style = {{
				...arrange.fill ,
				...arrange.row 	,
				...bull ( theme ) [ '404' ]
			}}>
				<View style 	= { appearance.ajax.view 	}>
					<Ionicons
						name 	= 'ios-pulse-outline'
						size 	= { 64 						}
						color 	= { theme.secondary 		}
					/>
					<Text style = { appearance.ajax.text 	}>
						{ language.screens.bull [ '404' 	]}
					</Text>
				</View>
			</View>
		);
	}
};
