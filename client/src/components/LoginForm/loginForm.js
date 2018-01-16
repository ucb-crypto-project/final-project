import React, { Component } from 'react';
import { Input, FormBtn } from '../Form';
import './loginForm.css';

class LoginForm extends Component {


  state = {
     email: '',
     password: ''
   };

   onInputChange = event => {
     const { name, value } = event.target

     this.setState({
       [name]: value
     })
   }


  render() {
    return (
      <div style={{ height: 300, width: 500 }} className="login-form">
        <form>
          <Input
            type="email"
            name="email"
            label="Enter Email"
            id="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.onInputChange}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            id="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.onInputChange}
          />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
