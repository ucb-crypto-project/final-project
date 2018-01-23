import React from 'react';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
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
    API.getCoins();
//   }
//
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>
                {this.state.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Coins;
