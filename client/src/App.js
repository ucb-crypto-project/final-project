import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Signup from './pages/Signup';
=======
import Coins from './pages/Coins';
>>>>>>> 507b3ac6915f22358489d3d78012a5e591a7fd4a


const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
<<<<<<< HEAD
        <Route exact path="/signup" component={Signup} />
=======
        <Route exact path="/coins" component={Coins}/>
>>>>>>> 507b3ac6915f22358489d3d78012a5e591a7fd4a
      </Wrapper>
    </div>
  </Router>
);

export default App;
