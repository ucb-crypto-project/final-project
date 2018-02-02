import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import LoginForm from '../components/LoginForm/loginForm';
import Nav from '../components/Nav';
import { Redirect } from 'react-router-dom';
import AuthInterface from '../utils/authInterface';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Login extends Component {

  state = {
    password: '',
    email: '',
    loggedIn: false
  }

  handleFormSubmit = event => {
    console.log(event)
    event.preventDefault()

    const { email, password } = this.state

    if ( !(email && password) ) return

    const formInput = { email, password }
    console.log(formInput)
    API.login( formInput )
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

  render() {
    const { loggedIn } = this.state

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
              <span className="page-title">Log In</span>
              <br />
              <LoginForm
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
