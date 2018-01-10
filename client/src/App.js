import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Home} />
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
