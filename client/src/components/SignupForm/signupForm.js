import React, { Component } from 'react';
import { Input, FormBtn } from '../Form';
import './signupForm.css';

class LoginForm extends Component {

   // handleSubmit = event => {
   //   // event.preventDefault();
   //   console.log(this.state);
   // }


  render() {
    const { form } = this.props
    return (
      <div style={{ height: 300, width: 500 }} className="login-form">
        <form>
          <Input
            type="text"
            name="first_name"
            label="First Name"
            id="fname"
            placeholder="First Name"
            form={form}
          />

          <Input
            type="text"
            name="last_name"
            label="Last Name"
            id="lname"
            placeholder="Last Name"
            form={form}
          />

          <Input
            type="email"
            name="email"
            label="Enter Email"
            id="email"
            placeholder="Email Address"
            form={form}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            id="password"
            placeholder="Enter Password"
            form={form}
          />

          <button type="submit" className="btn btn-primary" onClick={form.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
