import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine,
        VictoryTheme } from 'victory';

class Chart extends Component {

  state = {
    name: "Bitcoin",
    symbol: 'BTC',
    data: {}
  }


  componentDidMount() {
    console.log('Current state:', this.state.symbol);
    this.setState({symbol: this.props.symbol})
    console.log('New state:', this.state.symbol);
    this.firstCoinData(this.state.symbol);
    console.log(`From Data.js for ${this.props.symbol}`)

  }

  firstCoinData = (coin) => {
    API.coinHistoryData(coin)
    .then(response => {
      var coinHistoryData = (response.data.Data);
      // var jsonCoinData = JSON.parse(response);
      console.log(coinHistoryData);
      var convertedTime = this.timeConverter(coinHistoryData[0].time)
      console.log(convertedTime);
      var testData = this.formatedChartData(coinHistoryData);
      console.log('Test Data: ', testData);
      this.setState({
        data: testData
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
    console.log('props: ', this.props.symbol);
    console.log('data: ', this.state.data);
    return (
      <div>
        <Container fluid>
          <h2>Historical Prices</h2>
          <div className="col-lg-5">
            <VictoryChart
              theme={VictoryTheme.material}
            >
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
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

// return (
//       <div>
//       <Container fluid>
//       <Jumbotron>
//       <h1>Coin Prices</h1>
//       </Jumbotron>
//       <div className="col-lg-5">
//       <table className="table table-responsive" style={{fontSize:'0.80rem'}}>
//       <thead className="thead-inverse">
//       <tr>
//         <th>Rank</th>
//         <th>SYMBOL</th>
//         <th>NAME</th>
//         <th className="text-right">PRICE ($)</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           this.state.coins.map((el, index) => (
//             <tr key={index} onClick = {() => this.do_something(el)}>
//               <td>{el.rank}</td>
//               <td>{el.symbol}</td>
//               <td>{el.name}</td>
//               <td>{el.price_usd}</td>
//             </tr>
//           ))
//         }
//         </tbody>
//       </table>
//     </div>
//     </Container>
//     </div>
//     )