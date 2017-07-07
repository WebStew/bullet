
import 		React 			from 'react';
import { 	connect } 		from 'react-redux';
import {
			Text 	,
			View 	} 		from 'react-native';
import 		Loader 			from '../components/utilities/loader';
import 		List 			from '../components/utilities/list';
import 		Currency 		from '../components/currencies/item';
import 		strings 		from '../properties/strings';
import 		styleScene 		from '../styles/scene';
import 		styleSeperator 	from '../styles/seperators';
import 		styleCurrency 	from '../styles/currencies';
import 		stripe 			from '../styles/stripe';

export default connect (

	state => ({
		currencies : state.currencies
	})

) ( class Currencies extends React.Component {

	static navigationOptions = {
		headerTitle : strings.screens.currencies.title ,
		title 		: strings.screens.currencies.title
	};

	renderCurrency ( currency , section , row , highlight ) {

		let style = row % 2 === 0 ? stripe.primary : stripe.secondary;

		//dispatch 	= { this.props.dispatch	}

		return ( 
			<Currency
				currency 	= { currency 	}
				style 		= { style 		}
			/>
		);
	}

	setSeparator ( section , row , highlighted ) {

		return (
			<View
				key 	= { section + '-' + row 	}
				style 	= { styleSeperator.default 	}
			/>
		);
	}

	render () {

		return (
			
			<View style = { styleScene.default }>

				<Loader
					loading = { this.props.currencies.loading }
					size 	= 'large'
				/>

				<List 
					items 			= { this.props.currencies.items 	}
					loading 		= { this.props.currencies.loading 	}
					setRow 			= { this.renderCurrency 			}
					setSeparator 	= { this.setSeparator 				}
					style 			= { styleCurrency.list 				}
				/>

			</View>
		);
	}

});
