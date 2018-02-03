import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import '../../components/Buttons/Button.css';
import './Chart.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryContainer,
        VictoryTheme } from 'victory';

// var coinList = ['BTC', 'ETH', 'XRP'];

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symbol: this.props.symbol,
      data: {},
      ten_day: {},
      thirty_day: {},
      ninety_day: {},
      fromDay: '',
      fromDayChange_amt: 0,
      fromDayChange_pct: 0,
      current_price: 0
    }

    this.handle10Click = this.handle10Click.bind(this);
    this.handle30Click = this.handle30Click.bind(this);
    this.handle90Click = this.handle90Click.bind(this);
  }

  componentDidMount() {
    // console.log('Current state:', this.state.symbol);
    // this.setState({symbol: this.props.symbol})
    // console.log('New state:', this.state.symbol);
    this.firstCoinData(this.state.symbol, 90);
    this.firstCoinData(this.state.symbol, 30);
    this.firstCoinData(this.state.symbol, 10);

  }

  handle10Click() {
    var current_price = this.state.ten_day[this.state.ten_day.length - 1].y;
    var first_price = this.state.ten_day[0].y;
    var current_fixed = current_price.toFixed(2);
    var changeAmt = current_price - first_price;
    var fixedNum = changeAmt.toFixed(2);
    var changePct = (changeAmt / first_price) * 100;
    var fixedPct = changePct.toFixed(2);
    this.setState({
      data : this.state.ten_day,
      fromDayChange_amt: changeAmt,
      fromDay: this.state.ten_day[0].x,
      fromDayChange_amt: fixedNum,
      fromDayChange_pct: fixedPct,
    });
  }

  handle30Click() {
    var current_price = this.state.thirty_day[this.state.thirty_day.length - 1].y;
    var first_price = this.state.thirty_day[0].y;
    var current_fixed = current_price.toFixed(2);
    var changeAmt = current_price - first_price;
    var fixedNum = changeAmt.toFixed(2);
    var changePct = (changeAmt / first_price) * 100;
    var fixedPct = changePct.toFixed(2);

    this.setState({
      data : this.state.thirty_day,
      fromDayChange_amt: changeAmt,
      fromDay: this.state.thirty_day[0].x,
      fromDayChange_amt: fixedNum,
      fromDayChange_pct: fixedPct
    });
  }

  handle90Click() {
    var current_price = this.state.ninety_day[this.state.ninety_day.length - 1].y;
    var first_price = this.state.ninety_day[0].y;
    var current_fixed = current_price.toFixed(2);
    var changeAmt = current_price - first_price;
    var fixedNum = changeAmt.toFixed(2);
    console.log(fixedNum);
    var changePct = (changeAmt / first_price) * 100;
    var fixedPct = changePct.toFixed(2);
    console.log(fixedPct);

    this.setState({
      data : this.state.ninety_day,
      fromDayChange_amt: changeAmt,
      fromDay: this.state.ninety_day[0].x,
      fromDayChange_amt: fixedNum,
      fromDayChange_pct: fixedPct
    });
  }

  firstCoinData = (coin, numDays) => {
    console.log('Coin: ', coin);
    API.coinHistoryData(coin, numDays)
    .then(response => {
      var historyData = (response.data.Data);
      // console.log(historyData);
      var formattedData = this.formattedChartData(historyData);
      // console.log('Formatted data: ', formattedData);
      // var firstDay = this.timeConverter(response.data.TimeFrom);
      // console.log('From: ', firstDay);
      // var lastDay = this.timeConverter(response.data.TimeTo);
      // console.log('To: ', lastDay);

      if (numDays === 10) {
        var current_price = formattedData[formattedData.length - 1].y;
        var first_price = formattedData[0].y;
        var current_fixed = current_price.toFixed(2);
        var changeAmt = current_price - first_price;
        var fixedNum = changeAmt.toFixed(2);
        var changePct = (changeAmt / formattedData[0].y) * 100;
        var fixedPct = changePct.toFixed(2);
        this.setState({
          ten_day: formattedData,
          data: formattedData,
          fromDay: formattedData[0].x,
          fromDayChange_amt: fixedNum,
          fromDayChange_pct: fixedPct,
          current_price: current_fixed
        })
      }
      else if (numDays === 30) {
        this.setState({
          thirty_day: formattedData,
        })
      }
      else if (numDays === 90) {

        this.setState({
          ninety_day: formattedData,
        })
      }


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
    var time = month + '/' + date + '/' + year;
    return time;
  }

  formattedChartData = (input) => {
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
        <Container fluid>
          <h2>Current Price of {this.state.symbol} &nbsp;&nbsp;= &nbsp;&nbsp;${this.state.current_price}</h2>
          <div className='col-lg-10'>
            <h3 id={(this.state.fromDayChange_amt > 0) ? 'positive' : 'negative'}>Amount Change Since &nbsp; {this.state.fromDay} &nbsp;&nbsp;&nbsp;  ${this.state.fromDayChange_amt} &nbsp;&nbsp; ({this.state.fromDayChange_pct}%)</h3>
          </div>
          <div className="col-lg-10">
            <VictoryChart padding={{ left: 60, top: 50, right: 0, bottom: 20 }}
              theme={VictoryTheme.material}
              height={300}
              width={700}
            >

              <VictoryLine
                style={{
                  data: { stroke: "#c43a31", strokeWidth: 1.8 },
                  parent: { border: "2px solid #ccc"}
                }}
                data={this.state.data}
              />
              <VictoryAxis
                dependentAxis tickFormat={(tick) => `$${(tick)}`}

              />
            </VictoryChart>

            <div className="btn btn-outline-success history-btn" onClick={this.handle10Click}> 10 Day</div>
            <div className="btn btn-outline-success history-btn" onClick={this.handle30Click}> 30 Day</div>
            <div className="btn btn-outline-success history-btn" onClick={this.handle90Click}> 90 Day</div>

          </div>
        </Container>
      </div>
    );
  }
}

export default Chart;
