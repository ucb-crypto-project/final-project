import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import API from '../utils/API';
import AuthInterface from '../utils/authInterface';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import Chart from '../components/Chart';
import '../components/Chart/Chart.css';

class Charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current_coin: this.props.match.params.name,
      currentUser: ''
    }

  }


  componentDidMount() {
    //Initial API calls
    // this.searchCoins('ETH');
    API.checkForSession()
      .then( res => {
        const { user } = res.data
        console.log(user)
        if ( user ) {
          AuthInterface.login( user )
          this.setState({
            loggedIn: true,
            currentUser: user
          })
        }
      })
      .catch(() => {})
    console.log('Page loaded');
  }


  render() {
    return (
      <div>
        <Nav
          page={this}
        />
        <Container fluid>
        <div className="chart">
        <Row>

            <Col size="md-1"></Col>

            <Col size="md-10">

              <Chart
                  symbol={this.state.current_coin}
              />

            </Col>



        </Row>
        </div>

      </Container>
      </div>

    )
  }
}

export default Charts;
