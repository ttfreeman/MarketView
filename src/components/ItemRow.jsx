import React from "react";

const ItemRow = props => (
  <tr
    style={{
      border:
        props.selectedTicker === props.ticker.name ? "black solid 3px" : "none"
    }}
    onClick={() => props.onSelect(props.ticker.name)}
  >
    <th>{props.ticker.name}</th>
    <td>{parseFloat(Math.round(props.ticker.price * 100) / 100).toFixed(2)}</td>
    <td>{parseFloat(Math.round(props.ticker.change * 100) / 100).toFixed(2)}</td>
    <td>{parseFloat(props.ticker.changePercent).toFixed(2)+"%"}</td>
    <td>{parseFloat(Math.round(props.ticker.volume * 100) / 100e6).toFixed(0)}</td>
    <td
      className="btn btn-danger"
      onClick={() => props.onDelete(props.ticker.id)}
    >
      X
    </td>
  </tr>
);

export default ItemRow;
