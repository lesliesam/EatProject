'use strict'

var React = require('react-native')
var {
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableHighlight,
} = React;
var LogicData = require('../LogicData')
var MyHomePage = require('./MyHomePage')

const API = 'https://cn1.api.tradehero.mobi/api/'

var LoginPage = React.createClass({
	getInitialState: function() {
		return {
			userName: '',
			password: '',
		};
	},

	setUserName: function(text: string) {
		this.setState({
			userName: text
		})
	},

	setPassword: function(text: string) {
		this.setState({
			password: text
		})
	},

	loginPress: function() {
		console.log('userName is ' + this.state.userName)
		console.log('password is ' + this.state.password)
		fetch('https://cn1.api.tradehero.mobi/api/signupAndLogin', {
			method: 'POST',
			headers: {
				'Authorization': 'Basic MTM4MTY2MzEwMTk6MTExMTExMQ==',
				'TH-Client-Version': '4.2.0.10068',
				'TH-Language-Code': 'zh-CN',
				'TH-Client-Type': 6,
				'Content-Type': 'application/json; charset=UTF-8'
			},
			body: JSON.stringify({
		        device_access_token: '865624026741091',
		        clientType: 6,
		        clientVersion: '4.2.0.10068',
		        deviceToken: ' ',
		        channelType: 1,
		        isEmailLogin: true
		    })
		})
		.then((response) => response.json())
		.then((response) => {
			this.loginSuccess(response);
		})
	},

	loginSuccess: function(userData) {
		LogicData.setUserData(userData);
		console.log(LogicData.getUserData());

		this.props.navigator.push({
			title: '我的',
			component: MyHomePage,
			backButtonTitle: ' ',
		});
	},

	render: function() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.rowWrapper}>
					<Text style={styles.textInputLabel}>
						User name:
					</Text>
					<TextInput style={styles.textInput} 
						onChangeText={(text) => this.setUserName(text)}
						placeholder='Please input your name'
					/>
				</View>

				<View style={styles.rowWrapper}>
					<Text style={styles.textInputLabel}>
						Password:
					</Text>
					<TextInput style={styles.textInput} 
						onChangeText={(text) => this.setPassword(text)}
						placeholder='Please input your password'
						secureTextEntry={true}
					/>
				</View>

				<TouchableHighlight style={styles.loginClickableArea}
					onPress={this.loginPress}>
					<Text style={styles.loginText}>
						登录
					</Text>
				</TouchableHighlight>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		paddingTop: 80,
	},
	rowWrapper: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 10,
		justifyContent: 'flex-start',
	},
	textInputLabel: {
		flex: 1,
		fontSize: 12,
		textAlign: 'center',
	},
	textInput: {
		flex: 3,
		width: 200,
		height: 20,
		fontSize: 12,
		borderColor: 'gray', 
		borderWidth: 1,
		textAlign: 'center',
	},
	loginClickableArea: {
		marginTop: 30
	},
	loginText: {
		flex: 1,
		width: 200,
		fontSize: 20,
		textAlign: 'center',
		backgroundColor: '#aaaaaa', 
	}
})


module.exports = LoginPage;