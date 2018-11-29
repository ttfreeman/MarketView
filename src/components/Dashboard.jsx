import React, { Component } from "react";
import firebase from "./../firebase";
import Itemlist from "./Itemlist";
import Graph from "./Graph";
import Notes from "./Notes";
import AddItem from "./AddItem";
import * as getApiData from "./../api/getData";

const tickersRef = firebase
  .database()
  .ref()
  .child("react/tickers");

class Dashboard extends Component {
  state = {
    tickers: [],
    selectedTicker: "",
    data: []
  };

  componentWillMount() {
    // tickersRef.push({ name: "IWM", price: 280, description: "" });
    // tickersRef.push({ name: "QQQ", price: 75, description: "" });
    // tickersRef.push({ name: "AAPL", price: 25000, description: "" });

    tickersRef.on("value", snap => {
      const tickers = [];
      snap.forEach(childsnap => {
        tickers.push({
          id: childsnap.key,
          ...childsnap.val()
        });
      });
      this.setState({
        tickers
      });
      const selectedTicker = tickers[0].name;
      this.setState({ selectedTicker });
      getApiData.getDailyData(selectedTicker).then(res => {
        this.setState({ data: res });
      });
    });
  }

  handleDelete = tickerId => {
    tickersRef.child(tickerId).remove();
  };

  handleSelect = ticker => {
    this.setState({ selectedTicker: ticker });

    getApiData.getDailyData(ticker).then(res => {
      this.setState({ data: res });
    });
  };

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <AddItem
                tickers={this.state.tickers}
                onSelect={this.handleSelect}
              />
              <br />
              <Itemlist
                tickers={this.state.tickers}
                onDelete={this.handleDelete}
                onSelect={this.handleSelect}
                selectedTicker={this.state.selectedTicker}
              />
            </div>
            <div className="col-sm">
              <Graph
                selectedTicker={this.state.selectedTicker}
                data={this.state.data}
              />
              <Notes />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
