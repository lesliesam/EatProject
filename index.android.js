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
  BackAndroid,
} = React;

var AppNavigator = require('./AppNavigator')

var EatProject = React.createClass({
  render: function() {
    return (
      <AppNavigator />
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
