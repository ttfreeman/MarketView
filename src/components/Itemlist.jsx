import React, { Component } from "react";
import ItemRow from "./ItemRow";

class Itemlist extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Instrument</th>
              <th scope="col">Last</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tickers.map(ticker => (
              <ItemRow
                key={ticker.id}
                ticker={ticker}
                onDelete={this.props.onDelete}
                onSelect={this.props.onSelect}
                selectedTicker={this.props.selectedTicker}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Itemlist;
