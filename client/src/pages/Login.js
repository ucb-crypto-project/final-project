import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import LoginForm from '../components/LoginForm/loginForm';
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

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  }

  onInputChange = event => {
    console.log(event.target.name, event.target.value)

    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <h1>Log In</h1>
            <br />
            <LoginForm onInputChange={this.onInputChange} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
