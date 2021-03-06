import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SignupForm from '../components/SignupForm/signupForm';
import Nav from '../components/Nav';
import AuthInterface from '../utils/authInterface';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Login extends Component {

  state = {
    email: '',
    password: '',
    newUser: false,
    loggedIn: false,
    first_name: '',
    last_name: ''
  }

  componentDidMount() {
    API.checkForSession()
      .then( res => {
        const { user } = res.data

        if ( user ) {
          AuthInterface.login( user )
          this.setState({ loggedIn: true })
        }
      })
      .catch(() => {})
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const { email, password, newUser, first_name, last_name } = this.state

    if ( !(email && password) ) return

    // const authMethod = newUser ? 'signup' : 'login'
    const formInput = { email, password, first_name, last_name }

    API.signup( formInput )
      .then( res => {
        const { errors, user } = res.data

        if ( errors ) {
          return this.setState({ errors })
        }

        AuthInterface.login( user )
        this.setState({ loggedIn: true })

      })
      .catch(console.error)
  }

  render() {

    const { loggedIn, newUser, errors, username, password } = this.state

    if ( loggedIn ) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div>
        <Nav
          page={this}
        />
        <Container fluid>
          <Row>
            <Col size="lg-4"></Col>
            <Col size="lg-4">
              <span className="page-title">Sign Up</span>
              <br />
              <SignupForm
                form={this}
              />
            </Col>
            <Col size="lg-4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
