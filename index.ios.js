/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
} = React;

var NavBar = require('./js/view/NavBar')
var LandingPage = require('./js/view/LandingPage')
var LoginPage = require('./js/view/LoginPage')
var MyHomePage = require('./js/view/MyHomePage')
var MySettings = require('./js/view/MySettings')
var MyNotifications = require('./js/view/MyNotifications')

var RouteMapper = function(route, navigationOperations, onComponentRef) {
  var showBackButton = true;
  if (route.hideBackButton) {
    showBackButton = false;
  }

  if (route.name === 'landing') {
    return (
      <LandingPage navigator={navigationOperations} />
    );
  } else if (route.name === 'login') {
    return (
      <View style={{flex: 1}}>
        <NavBar title="邮件登陆"/>
        <LoginPage navigator={navigationOperations} />
      </View>
    );
  } else if (route.name === 'myhome') {
    return (
      <View style={{flex: 1}}>
        <NavBar title="我的" />
        <MyHomePage navigator={navigationOperations} />
      </View>
    );
  } else if (route.name === 'settings') {
    return (
      <View style={{flex: 1}}>
        <NavBar title="设置" showBackButton='true' navigator={navigationOperations}/>
        <MySettings navigator={navigationOperations} />
      </View>
    );
  } else if (route.name === 'myNotifications') {
    return (
      <View style={{flex: 1}}>
        <NavBar title="通知" showBackButton='true' navigator={navigationOperations}/>
        <MyNotifications navigator={navigationOperations} />
      </View>
    );
  }
};

var EatProject = React.createClass({
  render: function() {
    return (
      // <NavigatorIOS 
      //     style={styles.container} 
      //     barTintColor='#1789d5'
      //     tintColor='#FFFFFF'
      //     titleTextColor='#FFFFFF'
      //   initialRoute={{
      //     title: 'Landing',
      //     component: LandingPage,
      //     backButtonTitle: ' ',
      //     navigationBarHidden: true,
      // }}/>

      <Navigator
        style={styles.container}
        initialRoute={{name: 'landing'}}
        configureScene={() => Navigator.SceneConfigs.PushFromRight}
        renderScene={RouteMapper} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
});

AppRegistry.registerComponent('EatProject', () => EatProject);
