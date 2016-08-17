'use strict';
import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    AppRegistry,
    Navigator,
} from 'react-native';


var NewsList = require('./components/news-list');
var NewsDetails = require('./components/news-details');

var ROUTES = {
  news_list: NewsList,
  news_details: NewsDetails
};

var HackerNewsReader = React.createClass({

  renderScene: function(route, navigator) {

    var Component = ROUTES[route.name];
    return (
        <Component route={route} navigator={navigator} url={route.url} />
    );
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'news_list', url: ''}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );

  },


});


var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('HackerNewsReader', () => HackerNewsReader);