import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';

export default class Coins extends Component {
  state = {
    name: "",
    symbol: "",
    rank: "",
    price: "",
    coins: []
  }

  componentDidMount() {
    this.loadCoins();
    this.consoleCoins();

      }

      consoleCoins = () => {
        API.getCoins()
        .then(response =>
        console.log(response) +
        console.log(response.data[0]))
      }

      loadCoins = () => {
        API.getCoins()
          .then(response =>
              this.setState({ coins: response.data })

        )
        .catch(err => console.log(err));

    };

  render(){

    return (
      <div>
      <Container fluid>
      <Jumbotron>
      <h1>Coin Prices</h1>
      </Jumbotron>
      <div className="col-lg-5">
      <table className="table table-responsive" style={{fontSize:'0.80rem'}}>
      <thead className="thead-inverse">
      <tr>
        <th>Rank</th>
        <th>SYMBOL</th>
        <th>NAME</th>
        <th className="text-right">PRICE ($)</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.coins.map((el, index) => (
            <tr key={index} onClick = {() => this.do_something(el)}>
              <td>{el.rank}</td>
              <td>{el.symbol}</td>
              <td>{el.name}</td>
              <td>{el.price_usd}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
    </Container>
    </div>
    )
  }
}
