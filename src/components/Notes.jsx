import React, { Component } from "react";

class Notes extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div>
            <textarea defaultValue="some NEWS" />
          </div>
          <div>
            <textarea defaultValue="some ANALYSIS" />
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
