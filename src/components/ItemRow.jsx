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
    <td>{props.ticker.price}</td>
    <td />
    <td onClick={() => props.onDelete(props.ticker.id)}>X</td>
  </tr>
);

export default ItemRow;
