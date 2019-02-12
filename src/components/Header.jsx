import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="navbar navbar-expand navbar-dark flex-column sticky-top bg-dark flex-md-row bd-navbar flex-md-nowrap p-0"
        style={{ height: "50px" }}
      >
        <div className="container">
          <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
            MarketView
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item">
                <NavLink
                  to="/stocks"
                  className="nav-link active"
                  exact={true}
                >
                  Stocks
                </NavLink>
              </li>
              <li className="nav-item disabled">
                <NavLink to="#" className="nav-link">
                  Forex
                </NavLink>
              </li>
              <li className="nav-item disabled">
                <NavLink to="#" className="nav-link">
                  Commodities
                </NavLink>
              </li>
            </ul>
          </div>
          >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item text-nowrap">
              <NavLink to="#" className="nav-link">
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
