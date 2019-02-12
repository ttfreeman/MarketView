import React, { Component } from "react";
import AppRouter from "./AppRouter";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <AppRouter />
      </div>
    );
  }
}

export default App;
