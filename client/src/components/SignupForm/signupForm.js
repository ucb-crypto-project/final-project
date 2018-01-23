import React, { Component } from 'react';
import { Input, FormBtn } from '../Form';
import './signupForm.css';

class LoginForm extends Component {

   handleSubmit = event => {
     // event.preventDefault();
     console.log(this.state);
   }

  render() {
    return (
      <div style={{ height: 300, width: 500 }} className="login-form">
        <form method="POST" action="/signup">
          <Input
            type="email"
            name="email"
            label="Enter Email"
            id="email"
            placeholder="Email Address"
            form={this}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            id="password"
            placeholder="Enter Password"
            form={this}
          />

          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
