import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div>
          VolatilityView
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" exact={true}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/d3dash">D3-Dash</NavLink>
              </li>
              <li>
                <NavLink to="/analysis/:id">Analysis</NavLink>
              </li>
            </ul>
          </div>
          >
          <ul>
            <li>
              <NavLink to="/login">Sign in</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
