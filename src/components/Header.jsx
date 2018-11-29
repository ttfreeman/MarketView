import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="navbar navbar-expand navbar-dark flex-column sticky-top bg-dark flex-md-row bd-navbar flex-md-nowrap p-0"
        style={{ height: "50px" }}
      >
        <div className="container">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
            VolatilityView
          </a>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link active"
                  exact={true}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/d3dash" className="nav-link">
                  D3-Dash
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/analysis/:id" className="nav-link">
                  Analysis
                </NavLink>
              </li>
            </ul>
          </div>
          >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item text-nowrap">
              <NavLink to="/login" className="nav-link">
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
