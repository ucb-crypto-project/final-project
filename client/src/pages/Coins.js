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
      <div className="col-lg-5">
      <table className="table table-responsive" style={{fontSize:'0.80rem'}}>
      <thead className="thead-inverse">
      <Jumbotron>
      <h1>Coin Prices</h1>
      </Jumbotron>
      <tr>
        <th style={{width: '10%'}}>Rank</th>
        <th>SYMBOL</th>
        <th>NAME</th>
        <th className="text-right">PRICE ($)</th>
        </tr>
        </thead>
        <tbody>

          <Container fluid>
          <Row>
          <Col size="lg-12">
              <tr key={this.state}>
                    <td>{this.state.rank}</td>
                    <td>{this.state.symbol}</td>
                    <td>{this.state.name}</td>
                    <td>{this.state.price}</td>
                </tr>
            </Col>
          </Row>
          </Container>
        </tbody>
      </table>
    </div>
    )
  }
}
