/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var LandingPage = require('./js/view/LandingPage')

var EatProject = React.createClass({
  render: function() {
    return (
      <NavigatorIOS 
          style={styles.container} 
          barTintColor='#1789d5'
          tintColor='#FFFFFF'
          titleTextColor='#FFFFFF'
        initialRoute={{
          title: 'Landing',
          component: LandingPage,
          backButtonTitle: ' ',
          navigationBarHidden: true,
      }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('EatProject', () => EatProject);
