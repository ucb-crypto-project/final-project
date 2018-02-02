import React from "react";
import css from './jumbotron.css';

const Jumbotron = ({ children }) =>
  <div style={{ clear: 'both' }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
