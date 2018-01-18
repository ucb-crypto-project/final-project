import React from 'react';
import axios from 'axios';
import readline from 'readline';
import API from '../utils/API';
// var R = require('ramda');

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
    this.loadCoins();
  }

  loadCoins = () => {
    API.getCoins()
    .then(res =>

      this.setState({ coins: res.symbol[0] })
    )
    .catch(err => console.log(err));
      console.log(this);
  };

  render() {
    return (
      <h1>
        {this.state.title}
        {this.state.coins}
      </h1>
    );
  }
}

export default Coins;
