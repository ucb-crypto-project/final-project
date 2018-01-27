import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine,
        VictoryTheme } from 'victory';

class Chart extends Component {
  state = {
    name: "",
    symbol: "",
    data: {}
  }

  componentDidMount() {
    this.firstCoinData();

  }

  firstCoinData = () => {
    API.coinHistoryData('BTC')
    .then(response => {
      var coinHistoryData = JSON.parse(response);
      console.log(coinHistoryData.Data[0]);
      console.log(coinHistoryData.Data[1]);
    })
    .catch(err => console.log(err));
  }


  render() {
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
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
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