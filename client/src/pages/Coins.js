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
          this.setState({ name: response.data[0].name, symbol: response.data[0].symbol, rank: response.data[0].rank, price: response.data[0].price_usd })
        )
        .catch(err => console.log(err));

    };

  render(){
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>Coin Prices</h1>
              {this.state.name}
              {this.state.symbol}
              {this.state.rank}
              {this.state.price}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}
