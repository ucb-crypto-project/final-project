import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryContainer,
        VictoryTheme } from 'victory';

var coinList = ['BTC', 'ETH', 'XRP'];

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbol: this.props.symbol,
      data: {},
      BTC_data: {},
      ETH_data: {},
      XRP_data: {},
      BCH_data: {}
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  componentDidMount() {
    // console.log('Current state:', this.state.symbol);
    // this.setState({symbol: this.props.symbol})
    // console.log('New state:', this.state.symbol);
    for (var i = 0; i < coinList.length; i++) {
      this.firstCoinData(coinList[i]);
      // var coinKey = `${coinList[i]}_data`
      // console.log(`${coinList[i]} data: `, this.state.coinKey)
    }

  }

  firstCoinData = (coin) => {
    console.log('Coin: ', coin);
    API.coinHistoryData(coin)
    .then(response => {
      var coinHistoryData = (response.data.Data);
      // var jsonCoinData = JSON.parse(response);
      var convertedTime = this.timeConverter(coinHistoryData[0].time)
      // console.log(convertedTime);
      var convertedData = this.formatedChartData(coinHistoryData);
      console.log(`${coin} data: `, convertedData);
      var coinKey = `${coin}_data`;
      console.log('CoinKey: ', coinKey);

      if(coin === this.state.symbol) {
        console.log('coin = symbol', coin, this.state.symbol)
        this.setState({
          data: convertedData,
          coinKey: convertedData
        })
        console.log(this.state.data)
      }
      else {
        console.log('YES')
        this.setState({
          coinKey: convertedData
        })
      }
      console.log(`${coinKey} data updated state: `, this.state.coinKey)
    })
    .catch(err => console.log(err));
  }

  timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = month + '/' + date;
    return time;
  }

  formatedChartData = (input) => {
    var tempArray = [];
    for (var i = 0; i < input.length; i++) {
      var formatedObject = {}
      formatedObject.x = this.timeConverter(input[i].time);
      formatedObject.y = input[i].close;
      tempArray.push(formatedObject);
    }
    return tempArray;
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });

  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    let { data } = event.target;

    event.preventDefault();
    let coinKey = `${this.state.symbol}_data`;
    console.log(`CoinKey: ${coinKey} Symbol: ${this.state.symbol}`);
    // let tempData = {};
    console.log(`${coinKey} data: `, this.state.coinKey)
    let tempData = this.state.coinKey;
    console.log(`Temp data =`, tempData);

    this.setState({
      data : tempData
    });
    console.log('Set state...');
    // console.log(`CoinKey = ${coinKey}`);
    // console.log(`${coinKey} data: `, this.state.coinKey)
    // console.log(`Current coin =`, this.state.symbol);
    // console.log(`Current data =`, this.state.data);
    console.log('data: ', this.state.data);

  }


  render() {
    // console.log('props: ', this.props.symbol);
    // console.log('data: ', this.state.data);
    return (
      <div>
        <Container>
          <h2>Historical Prices - {this.state.symbol}</h2>
          <form className="form" onSubmit={this.handleFormSubmit}>
            <input
              value={this.state.symbol}
              name='symbol'
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search for a coin..."
            />
            <button onClick={this.handleFormSubmit}>Search</button>
          </form>
          <div className="col-lg-7">
            <VictoryChart
              theme={VictoryTheme.material}
              height={300}
              width={550}
            >
              <VictoryLine
                
                style={{
                  data: { stroke: "#c43a31", strokeWidth: 7 },
                  parent: { border: "2px solid #ccc"}
                }}
                data={this.state.data}
              />
            </VictoryChart>
          </div>
        </Container>
      </div>
    );
  }
}

export default Chart;
