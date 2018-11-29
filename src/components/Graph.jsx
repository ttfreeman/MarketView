import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = { data: [] };

  render() {
    return (
      <div>
        <h2 className="card-header">
          <span className="badge badge-secondary">
            {this.props.selectedTicker}
          </span>
        </h2>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="/">
                  Price
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="/">
                  Volatility
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" data-toggle="tab" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <Chart
              width={"600px"}
              height={"400px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[["t", "p"], ...this.props.data]}
              options={{
                title: this.props.selectedTicker,
                titleTextStyle: {
                  color: "blue",
                  fontSize: 20,
                  bold: true
                },
                hAxis: {
                  title: "Time",
                  direction: "-1",
                  gridlines: {
                    count: 15
                    // units: {
                    //   days: { format: ["MMM dd"] }
                    // }
                  }
                },
                vAxis: {
                  title: "Price",
                  gridlines: { count: 5 }
                },
                legend: "none",
                width: 700
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
