'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Navigator,
	View,
	Text,
	Image,
} = React;

var NavBar = React.createClass({
	render: function() {
		var backButton = this.props.showBackButton?
		<Image 
			style={styles.backButton} 
			source={require('../../images/icon_return_default.png')}/>
		:
		<View />

		return (
			<View style={styles.container} >
				{backButton}
				<Text style={styles.title}>
					{this.props.title}
				</Text>
				<Text style={styles.right}>
					
				</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: '#1789d5',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 15,
	},
	backButton: {
		width: 30,
		height: 30,
		resizeMode: Image.resizeMode.contain,
	},
	left: {
		fontSize: 15,
		textAlign: 'center',
		color: '#ffffff',
	},
	title: {
		fontSize: 15,
		textAlign: 'center',
		color: '#ffffff',
	},
	right: {
		fontSize: 15,
		textAlign: 'center',
		color: '#ffffff',
	},
});

module.exports = NavBar;