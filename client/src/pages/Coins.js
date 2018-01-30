import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import openSocket from 'socket.io-client';

export default class Coins extends Component {
  state = {
    name: "",
    symbol: "",
    rank: "",
    price: "",
    coins: [],
    most_updated:{}
  }

  componentDidMount() {
    this.loadCoins();
    this.consoleCoins();

    const socket = openSocket("https://coincap.io");

    let react_this = this;
    // // Updated version
    socket.on('trades', function (tradeMsg) {
      react_this.setState({ most_updated: tradeMsg });
    })


  }

  consoleCoins = () => {
    API.getCoins()
      .then(response =>
        console.log(response) +
        console.log(response.data[0]))
  }


  loadCoins = () => {
    API.getCoins()
      .then(response => {
        this.setState({ coins: response.data.slice(0, 50) });



      })
      .catch(err => console.log("Testing", err));

  };

  all_coins = this.state.coins;

  update_values = () => {
    

    try {
      // console.log("State: ", this.state.most_updated);
      this.state.coins.map((el, index) => {
        // Name equal updated version name
        if (el.long === this.state.most_updated.msg.long) {
          // TODO
          // Update the state


        } else {
          // Do something else
          console.log("Checking if it is not equal");
        }

      });

    } catch (error) {
      console.log("Loading..");
    }
  };

  componentDidUpdate(){
    this.update_values();
  }

  render() {
    


    return (
      <div>
        <Container fluid>
          <Jumbotron>
            <h1>Coin Prices</h1>
          </Jumbotron>
          <div className="col-lg-5">
            <table className="table table-responsive" style={{ fontSize: '0.80rem' }}>
              <thead className="thead-inverse">
                <tr>
                  <th>Rank</th>
                  <th>SYMBOL</th>
                  <th>NAME</th>
                  <th >PRICE ($)</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.coins.map((el, index) => (
                    <tr key={index} onClick={() => this.do_something(el)}>
                      <td>{index + 1}</td>
                      <td>{el.long}</td>
                      <td>{el.short}</td>
                      <td>{el.price}</td>
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
