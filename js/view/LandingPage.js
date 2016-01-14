'use strict'

var React = require('react-native');
var Swiper = require('react-native-swiper')

var {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableHighlight
} = React;

var LoginPage = require('./LoginPage')

var LandingPage = React.createClass({
	loginPress: function(movie: Object) {
		// this.props.navigator.push({
		// 	title: '邮箱登陆',
		// 	component: LoginPage,
		// 	backButtonTitle: ' ',
		// 	navigationBarHidden: 'false',
		// });

		this.props.navigator.replace({
			title: '邮箱登陆',
			name: 'login',
		});
	},

	render: function() {
		return (
			<View style={styles.wrapper}>
				<Swiper height={550} loop={false} bounces={true}>
					<View style={styles.slide}>
						<Image 
							style={styles.image} 
							source={require('../../images/guide_screen1.png')}/>
						<TouchableHighlight style={styles.loginClickableArea}
							onPress={this.loginPress}>
							<Text style={styles.loginText}>
								登录
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.slide}>
						<Image 
							style={styles.image} 
							source={require('../../images/guide_screen2.png')}/>
					</View>
					<View style={styles.slide}>
						<Image 
							style={styles.image} 
							source={require('../../images/guide_screen3.png')}/>
					</View>
					<View style={styles.slide}>
						<Image 
							style={styles.image} 
							source={require('../../images/guide_screen4.png')}/>
					</View>
				</Swiper>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		padding: 20,
	},
	slide: {
		alignItems: 'center',
	},
	image: {
		flex: 1,
		height: 400,
		resizeMode: Image.resizeMode.contain,
	},
	loginClickableArea: {
		marginTop: 30,
	},
	loginText: {
		fontSize: 20,
		width: 200,
		height: 30,
		lineHeight: 25,
		textAlign: 'center',
		color: '#ffffff',
		backgroundColor: '#1789d5',
	}
})

module.exports = LandingPage;