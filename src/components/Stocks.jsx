import React, { Component } from "react";
import firebase from "./../firebase";
import Itemlist from "./Itemlist";
import Graph from "./Graph";
import AddItem from "./AddItem";
import * as getApiData from "./../api/getData";

const tickersRef = firebase
  .database()
  .ref()
  .child("react/tickers");

class Stocks extends Component {
  state = {
    tickers: [],
    selectedTicker: "",
    data: [],
    dataFetchErr: ""
  };

  componentDidMount() {
    tickersRef.on("value", snap => {
      let tickers = [];
      snap.forEach(childsnap => {
        tickers.push({
          id: childsnap.key,
          ...childsnap.val()
        });

      });

      const getMultipleQuotes = tickers => {
        const promiseArray = tickers.map(getApiData.getSingleQuote);
        Promise.all(promiseArray).then(data => {
          data.forEach((element, index) => {
            tickers[index].price = element["05. price"]
            tickers[index].volume = element["06. volume"]
            tickers[index].change = element["09. change"]
            tickers[index].changePercent = element["10. change percent"]
          })
          this.setState({
            tickers
          });
        }).catch(err => {
          console.log(err)
          this.setState({
            dataFetchErr: err.message
          });
        })
      }

      getMultipleQuotes(tickers)

      if (tickers.length > 0) {
        const selectedTicker = tickers[0].name;
        this.setState({ selectedTicker });
        getApiData.getDailyData(selectedTicker).then(res => {
          this.setState({ data: res });
        });
      }

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
                dataFetchErr={this.state.dataFetchErr}
              />
            </div>
            <div className="col-sm">
              <Graph
                selectedTicker={this.state.selectedTicker}
                data={this.state.data}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Stocks;
