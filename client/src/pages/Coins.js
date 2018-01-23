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
    price_usd: "",
  }
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(function(response){
      console.log('Response', response);
      console.log('Response', response.data[0].name);
      console.log('Response', response.data[0].symbol);
      console.log('Response', response.data[0].rank);
      console.log('Response', response.data[0].price_usd);

        })
      }

  render(){
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>Coin Prices</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}
