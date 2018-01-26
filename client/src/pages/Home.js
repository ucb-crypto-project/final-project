import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Home extends Component {
  state = {
    current_coin: 'BTC',
  };

  componentDidMount() {
    //Initial API calls
    this.searchCoins();
  }

  searchCoins = () => {
    API.firstSearch()
      // .then(res => this.setState({ result: res.data }))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  onInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>Crypto Currency Home Base</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
