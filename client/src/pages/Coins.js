import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';

export default class Coins extends Component {
  state = {
    coins:[]
  }
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(function(response){
      console.log('Response', response);
      console.log('Response', response.data[0]);

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
