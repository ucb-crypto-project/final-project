import React from "react";

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">CryptoBase</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            {/* TODO Change to Link for React Routing */}
            {/* <a class="nav-link" href="#">Home </a> */}
          </li>
        </ul>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Nav;
