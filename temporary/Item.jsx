import React from "react";

const Item = props => (
  <div>
    <div className="container">
      <div
        className="row"
        style={{
          border:
            props.selectedTicker === props.ticker.name
              ? "black solid 3px"
              : "none"
        }}
      >
        <button
          className="col-sm"
          onClick={() => props.onSelect(props.ticker.name)}
        >
          {props.ticker.name}
        </button>
        <div className="col-sm" style={{ border: "black dotted 1px" }}>
          {props.ticker.price}
        </div>
        <div className="btn-group" role="group">
          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props.ticker.id)}
          >
            X
          </button>
          <button className="btn btn-default">Up</button>
          <button className="btn btn-default">Down</button>
          <button className="btn btn-info">Edit</button>
        </div>
      </div>
    </div>
  </div>
);

export default Item;
