import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
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
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>Crypto Currency Home Base</h1>
              <div>
                { this.state.loggedIn ? (<div> <p>Current User Email: {this.state.currentUser.email}</p>
                 <button className="btn btn-outline-success my-2 my-sm-0" onClick={ () => AuthInterface.logout(this.props.history, page) } >Log Out</button>
               </div>
              )  : (
                <Link to={'/login'} className="btn btn-primary my-2 my-sm-0">Log In</Link>
              ) }
              <br/><br/>
              <Link to={'/coins'} className="btn btn-outline-info my-2 my-sm-0">Real Time Coin Data</Link>
            </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
