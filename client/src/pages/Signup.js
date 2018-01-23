import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SignupForm from '../components/SignupForm/signupForm';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Login extends Component {

  state = {
    current_user_id: '',
    password: '',
    email: ''
  };

  componentDidMount() {
    //Initial API calls
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <h1>Sign Up</h1>
            <br />
            <SignupForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
