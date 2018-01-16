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
            <Jumbotron>
              <h1>Crypto Currncy Log In</h1>
              <LoginForm onInputChange={this.onInputChange} />
            </Jumbotron>

            {/* <form>
              <Input
                placeholder="First Name"
                name="fName"
                value={this.state.fName}
                onChange={this.onInputChange}
              />
              <FormBtn onClick={this.saveBook}>Submit Book</FormBtn>
            </form> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
