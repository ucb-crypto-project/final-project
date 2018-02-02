import React from 'react';
import { Link } from 'react-router-dom';
import AuthInterface from '../../utils/authInterface';
import css from './nav.css';

const Nav = (props) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to={'/'} className="navbar-brand"><img src="/crypto.svg" className="nav-logo"></img> CryptoBase</Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            {/* TODO Change to Link for React Routing */}
            {/* <a className="nav-link" href="#">Home </a> */}
          </li>
        </ul>

        { props.page.state.loggedIn ? (
          <div>
            <p className="user">{props.page.state.currentUser.email}</p>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={ () => AuthInterface.logout(props.page.history, props.page) } >Log Out</button>
          </div>
        )  : (
          <div>
            <Link to={'/signup'} className="btn btn-outline-success my-2 my-sm-0">Sign Up</Link>
            <Link to={'/login'} className="btn btn-outline-primary my-2 my-sm-0">Log In</Link>
          </div>
        ) }

        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button> */}
      </div>
    </div>
  </nav>
);

export default Nav;
