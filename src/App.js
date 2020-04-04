
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Routes from './Routes/RouteNavigation';

console.disableYellowBox = true;

export default class App extends Component {

  render() {
    return (
      <Routes />
    );
  }
};