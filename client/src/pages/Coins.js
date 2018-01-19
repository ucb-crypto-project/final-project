import React from 'react';
import axios from 'axios';
import readline from 'readline';
import API from '../utils/API';
const binance = require('node-binance-api');

class Coins extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = {
      title: 'Binance Table',
      coins: []
    };
  };

  componentDidMount() {
    API.getCoins();
  }

  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

export default Coins;
