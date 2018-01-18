import React, { Component } from 'react';
import readline from 'readline';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import axios from 'axios';
require('console.table');
var R = require('ramda');
var CronJob = require('cron').CronJob;


class Coins extends Component {

  componentDidMount() {
    this.generate_coin_data();
  }

generate_coin_data = (data) => {

  let table = [];

  for (let key in data) {
    if (data[key]) continue;
    const symbol = data[key].currency;
    const coin = R.propEq('symbol', symbol);
    const coin_data = R.filter(coin, data);
    const coin_price = coin_data[0].price;
    const table_row =
      {
      'Coin' : key,
      'Price' : coin_price
      };
    table.push(table_row);
  }

  table.push({
    'Coin' :'',
    'Price' :'',
});

var apiCall = new CronJob('*/3 * * * * *', function() {

  axios.get('https://api.binance.com/api/v3/ticker/price')
  .then(function (response) {

    // clear console
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);

    // get binance result for all markets
    let data = response.data;
    table = generate_coin_data(data);

    console.table(table);
  })
  .catch(function (error) {
    console.log(error);
  });

},
  function() {
    console.log('API error, function stopped working');
},
  true
);

  return table;

  }
}

export default Coins;
