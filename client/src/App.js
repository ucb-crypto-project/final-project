import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Charts from './pages/Charts';
import Signup from './pages/Signup';
// import Coins from './pages/Coins';
import './base.css';


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/charts/:name" component={Charts} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/coins" component={Coins}/> */}
      </Wrapper>
    </div>
  </Router>
);

export default App;
