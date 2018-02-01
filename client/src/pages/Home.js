import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import API from '../utils/API';
import AuthInterface from '../utils/authInterface';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

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
                <img src="/crypto.svg" className="logo"></img>
                <h1>Crypto Currency Home Base</h1>
                <div>
                  { this.state.loggedIn ? (<div> <p>Current User Email: {this.state.currentUser.email}</p>
                  </div>
                )  : ( <br/>) }
                <br/><br/>
                <Link to={'/coins'} className="btn btn-outline-info my-2 my-sm-0">Real Time Coin Data</Link>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Home;
