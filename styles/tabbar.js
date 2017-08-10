
//import themes from '../properties/themes';

export default ( theme ) => {

	return {

		tabBar: {
		height: 49, // Default tab bar height in iOS 10
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: theme.border,
		backgroundColor: theme.chrome , // Default background color in iOS 10
		},
		tab: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-end',
		},
		icon: {
		flexGrow: 1,
		},
		label: {
		textAlign: 'center',
		fontSize: 10,
		marginBottom: 1.5,
		backgroundColor: 'transparent',
		}
	}

};