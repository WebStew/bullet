/* @flow */
import 		React 						, 
		{ 	PureComponent 				} 	from 'react';
import 	{ 	connect 					} 	from 'react-redux';
import 	{ 	Animated , 
			TouchableWithoutFeedback 	} 	from 'react-native';
import 		TabBarIcon 						from '../../node_modules/react-navigation/src/views/TabView/TabBarIcon';
import 		styles 							from '../../styles/tabbar';
import 	type {
			NavigationAction 			,
			NavigationRoute 			,
			NavigationState 			,
			NavigationScreenProp 		,
			Style 						} 	from '../../node_modules/react-navigation/src/TypeDefinition';
import type { 
			TabScene 					} 	from '../../node_modules/react-navigation/src/views/TabView/TabView';

type DefaultProps = {
	activeTintColor 		: string ,
	activeBackgroundColor 	: string ,
	inactiveTintColor 		: string ,
	inactiveBackgroundColor : string ,
	showLabel 				: boolean
};

type Props = {
	activeTintColor 		: string ,
	activeBackgroundColor 	: string ,
	inactiveTintColor 		: string ,
	inactiveBackgroundColor : string ,
	position 				: Animated.Value 													,
	navigation 				: NavigationScreenProp < NavigationState , NavigationAction > 		,
	jumpToIndex 			: ( index : number 		) => void 									,
	getLabel 				: ( scene : TabScene 	) => ? ( React.Element <*> | string ) 		,
	renderIcon 				: ( scene : TabScene 	) => React.Element <*> 						,
	showLabel 				: boolean 	,
	style 				? 	: Style 	,
	labelStyle 			? 	: Style 	,
	showIcon 				: boolean
};

export default connect (

	state => ({
		theme : state.theme
	})

) ( class TabBarBottom extends PureComponent < DefaultProps , Props , void > {

	// See https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html
	static defaultProps = {

		// Default active tint color in iOS 10
		activeTintColor 		: '#3478f6' 	, 
		activeBackgroundColor 	: 'transparent' ,

		// Default inactive tint color in iOS 10
		inactiveTintColor 		: '#929292' 	, 
		inactiveBackgroundColor : 'transparent' ,
		showLabel 				: true 			,
		showIcon 				: true
	};

	props : Props;

	_renderLabel 	= ( scene : TabScene ) => {

		const {
			position 			,
			navigation 			,
			activeTintColor 	,
			inactiveTintColor 	,
			labelStyle 			,
			showLabel
		} = this.props;

		if ( showLabel === false ) {
			return null;
		}

		const 	{ index 	} = scene 				,
				{ routes 	} = navigation.state 	,

				// Prepend '-1', so there are always at least 2 items in inputRange
				inputRange 		= [-1 , ...routes.map (( x : * , i : number ) => i )] ,
				outputRange 	= inputRange.map (( inputIndex : number ) =>
					inputIndex === index ? activeTintColor : inactiveTintColor
				) ,
				color 		= position.interpolate ({
					inputRange ,
					outputRange
				}) ,
				tintColor 	= scene.focused ? activeTintColor : inactiveTintColor ,
				label 		= this.props.getLabel ({ ...scene , tintColor });


		if ( typeof label === 'string' ) {

			return (
				<Animated.Text style = {[
					styles ( this.props.theme ).label 	, 
					{ color } 							, 
					labelStyle
				]}>
					{label}
				</Animated.Text>
			);
		}

		if ( typeof label === 'function' ) {

			return label ({ 
				...scene , 
				tintColor 
			});
		}

		return label;
	};

	_renderIcon 	= ( scene : TabScene ) => {

		const {
			position 			,
			navigation 			,
			activeTintColor 	,
			inactiveTintColor 	,
			renderIcon 			,
			showIcon
		} = this.props;

		if ( showIcon === false ) {
			return null;
		}

		return (
			<TabBarIcon
				position 			= { position 							}
				navigation 			= { navigation 							}
				activeTintColor 	= { activeTintColor 					}
				inactiveTintColor 	= { inactiveTintColor 					}
				renderIcon 			= { renderIcon 							}
				scene 				= { scene 								}
				style 				= { styles ( this.props.theme ).icon 	}
			/>
		);
	};

	render () {

		const {
			position 				,
			navigation 				,
			jumpToIndex 			,
			activeBackgroundColor 	,
			inactiveBackgroundColor ,
			style
		} = this.props;

		const 	{ routes } = navigation.state ,

				// Prepend '-1', so there are always at least 2 items in inputRange
				inputRange = [ -1 , ...routes.map (( x : * , i : number ) => i )] ,
				appearance = styles ( this.props.theme );

		return (
			<Animated.View style ={[ 
				appearance.tabBar, 
				style
			]}>
				{ routes.map (( route : NavigationRoute , index : number ) => {

					const 	focused 		= index === navigation.state.index ,
							scene 			= { 
								route , 
								index , 
								focused 
							} ,
							outputRange 	= inputRange.map(( inputIndex : number ) =>
								inputIndex === index ? activeBackgroundColor : inactiveBackgroundColor
							) ,
							backgroundColor = position.interpolate ({
								inputRange ,
								outputRange
							}) ,
							justifyContent 	= this.props.showIcon ? 'flex-end' : 'center';

					return (
						<TouchableWithoutFeedback
							key 	= { route.key 					}
							onPress = {() => jumpToIndex ( index 	)}
						>
							<Animated.View
								style = {[
									appearance.tab , 
									{ 
										backgroundColor , 
										justifyContent 
									}
								]}
							>
								{ this._renderIcon 	( scene )}
								{ this._renderLabel ( scene )}
							</Animated.View>
						</TouchableWithoutFeedback>
					);
				})}
			</Animated.View>
		);
	}
});

