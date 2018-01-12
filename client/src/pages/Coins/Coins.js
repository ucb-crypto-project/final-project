import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Coins extends Component {
  state = {
    Coins: []
  };

  componentDidMount() {
    this.loadCoins();
  }

  loadBooks = () => {
    API.getCoins()
      .then(res => this.setState({ coins: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Coins Should I Study?</h1>
            </Jumbotron>
            <form>
              <Input name="name" placeholder="Name (required)" />
              <Input name="symbol" placeholder="Symbol (required)" />
              <TextArea name="notes" placeholder="Notes (Optional)" />
              <FormBtn>Lookup Coin</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Coins On My List</h1>
            </Jumbotron>
            {this.state.coins.length ? (
              <List>
                {this.state.coins.map(book => (
                  <ListItem key={coin._id}>
                    <a href={"/coins/" + coin._id}>
                      <strong>
                        {coin.name} by {coin.symbol}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Coins;
