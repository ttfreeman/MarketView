import React from "react";
import firebase from "./../firebase";
import * as getApiData from "./../api/getData";

const tickersRef = firebase
  .database()
  .ref()
  .child("react/tickers");

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      options: [],
      selectedOption: "AAPL",
      focus: false,
      isDisabled: false,
      inputErr: false
    };
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
  }

  _onBlur() {
    setTimeout(() => {
      if (this.state.focus) {
        this.setState({
          focus: false
        });
      }
    }, 0);
  }
  _onFocus() {
    if (!this.state.focus) {
      this.setState({
        focus: true
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const newTicker = e.target.elements.ticker.value.trim();

    e.target.elements.ticker.value = "";
    const duplicateTickers = this.props.tickers.filter(
      ticker => ticker.name === newTicker
    );
    if (duplicateTickers.length === 0) {
      this.handleAddItem(newTicker);
      this.setState({ selectedOption: newTicker, options: [] });
      setTimeout(() => {
        this.props.onSelect(newTicker);
      }, 0);
      e.target.elements.ticker.placeholder = "Search Stock";
    }
    else {
      this.setState({ inputErr: true });
      e.target.elements.ticker.placeholder = `${newTicker} is already in the watchlist!`;
      this.setState({ selectedOption: newTicker, options: [] });
      setTimeout(() => {
        this.props.onSelect(newTicker);
      }, 0);
    }
  };

  handleAddItem = ticker => {
    const newTickerObj = {
      name: ticker,
    };
    tickersRef.push(newTickerObj);
    this.props.onSelect(ticker);
  };

  handleChange = e => {
    const keyword = e.target.value;

    this.setState({ keyword });
    getApiData.getTickers(keyword).then(res => {
      this.setState({
        options: res
      });
    });
    this.setState({ keyword });
  };

  render() {
    const { errDetected, focus } = this.state;
    return (
      <form onSubmit={this.onSubmit} style={{ marginTop: "25px" }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="search"
            aria-describedby="inputGroup-sizing-default"
            name="ticker"
            placeholder={focus ? "" : "Search Stock"}
            list="options"
            onChange={this.handleChange}
            required
            style={{
              backgroundColor: errDetected
                ? "rgba(250, 150, 150, 0.5)"
                : undefined
            }}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            autoFocus
          />
          <datalist id="options">
            {this.state.options.map(element => (
              <option key={element.symbol} value={element.symbol}>
                {element.name} }
              </option>
            ))}
          </datalist>
          <div className="input-group-prepend">
            <button
              type="submit"
              className=" btn btn-primary"
              id="inputGroup-sizing-default"
              disabled={this.state.isDisabled}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddItem;
