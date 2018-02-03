import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import API from '../utils/API';
import AuthInterface from '../utils/authInterface';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import Coins from '../components/CoinTable';
import '../base.css';

class Home extends Component {
  state = {
    loggedIn: false,
    currentUser: ''
  }

  componentDidMount() {
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
  }

  onInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {

    const page = this

    return (
      <div>
        <Nav
          page={this}
        />
        <Container fluid>
          <Row>
            <Col size="lg-12">
              <Jumbotron>
                <Row>
                  <Col size="md-2"></Col>
                  <Col size="md-1">
                    <img src="/crypto.svg" className="logo"></img>

                  </Col>
                  <Col size="md-6">
                    <h1>Crypto Currency Home Base</h1>
                    <div>
                      { this.state.loggedIn ? (<div> <p className="welcome-msg">Welcome {this.state.currentUser.first_name}</p>
                      </div>
                    )  : ( <br/>) }
                    <br/><br/>
                    <h3>Real Time Price Data</h3>
                  </div>
                  </Col>
                  <Col size="md-3"></Col>
                </Row>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-2"></Col>

          <Col size="md-8">
            <Coins />
          </Col>

          <Col size="md-2"></Col>
        </Row>

      </Container>
      </div>
    );
  }
}

export default Home;
