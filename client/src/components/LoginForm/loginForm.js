import React, { Component } from 'react';
import { Input, FormBtn } from '../Form';
import './loginForm.css';

class LoginForm extends Component {

  render() {

    const { form } = this.props

    console.log(form.handleFormSubmit)

    return (
      <div className="login-form">
        <form>
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
