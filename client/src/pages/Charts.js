import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import Chart from '../components/Chart';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      current_coin: 'ETH'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // state = {
  //   current_coin: 'ETH',
  // };

  componentDidMount() {
    //Initial API calls
    // this.searchCoins('ETH');
    console.log('Page loaded');
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      current_coin: ""
    });
    console.log(`Current coin = ${this.state.current_coin}`);
  };

  render() {
    return (
        <Container fluid>
          <Row>
            <Col size="lg-12">
              <Jumbotron>
                <h1>Crypto Currency Home Base</h1>
              </Jumbotron>
              <form className="form">
                <input
                  value={this.state.current_coin}
                  name="current_coin"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Search for a coin..."
                />
                <button onClick={this.handleFormSubmit}>Search</button>
              </form>
              <Chart 
                symbol={this.state.current_coin} 
              />
            </Col>
          </Row>
        </Container>
    )
  }
}

export default Home;
