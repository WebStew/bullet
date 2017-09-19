
import 		React 			from 'react';
import { 	Image 		,
			Platform 	,
			Text 		,
			View 		} 	from 'react-native';
import { 	FacebookAds } 	from 'expo';
import 		style 			from '../../styles/adverts';
import 		layout 			from '../../styles/layout';

const 	manager 	= ( id ) => new FacebookAds.NativeAdsManager ( id , 1 ) 		,
		Component 	= FacebookAds.withNativeAd ( class Ad extends React.Component 	{

			render () {

				const 	advert 		= this.props.nativeAd 		,
						language 	= this.props.language 		,
						theme 		= this.props.theme 			,
						appearance 	= style ( theme ).button 	;

				return (
					<View 		style = { appearance.view 	}>
						<Text 	style = { appearance.label 	}>
							{ language.actions.ad }
						</Text>
						<Image 
							source 	= {{
								uri : advert.icon
							}}
							style 	= { appearance.icon 	}
						/>
						<View style = { appearance.column 	}>
							<Text 
								numberOfLines 	= { 1 					}
								style 			= { appearance.title 	}
							>
								{ advert.title }
							</Text>
							<Text 
								numberOfLines 	= { 1 				}
								style 			= { appearance.cta 	}
							>
								{ advert.callToActionText }
							</Text>
						</View>
					</View>
				);
			}
		});

export default class ButtonAd extends React.Component {

	render () {

		return (
			<Component 
				adsManager 	= { manager ( this.props.id )}
				language 	= { this.props.language 	}
				theme 		= { this.props.theme 		}
			/>
		);
	}
};

