import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryContainer,
        VictoryTheme } from 'victory';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Bitcoin",
      symbol: this.props.symbol,
      size: 'large',
      data: {}
    }
    // this.handleClick = this.handleClick.bind(this);

  }


  componentDidMount() {
    // console.log('Current state:', this.state.symbol);
    // this.setState({symbol: this.props.symbol})
    // console.log('New state:', this.state.symbol);
    this.firstCoinData(this.state.symbol);
    console.log(`From Data.js for ${this.props.symbol}`)

  }

  firstCoinData = (coin) => {
    API.coinHistoryData(coin)
    .then(response => {
      var coinHistoryData = (response.data.Data);
      // var jsonCoinData = JSON.parse(response);
      console.log(response);
      var convertedTime = this.timeConverter(coinHistoryData[0].time)
      // console.log(convertedTime);
      var convertedData = this.formatedChartData(coinHistoryData);
      console.log('Test Data: ', convertedData);
      this.setState({
        data: convertedData
      });
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


  render() {
    // console.log('props: ', this.props.symbol);
    // console.log('data: ', this.state.data);
    return (
      <div>
        <Container>
          <h2>Historical Prices - {this.state.symbol}</h2>
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
