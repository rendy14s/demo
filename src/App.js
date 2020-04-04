
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import numeral from 'numeral';


import Routes from './Routes/RouteNavigation';

console.disableYellowBox = true;

numeral.register('locale', 'id', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'Rp'
  }
})
numeral.locale('id')


export default class App extends Component {

  render() {
    return (
      <Routes />
    );
  }
};