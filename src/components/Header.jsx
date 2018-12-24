import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header-content">
            <h1 className="header__brand">VolatilityView</h1>
            <ul className="header__nav-content">
              <li>
                <NavLink to="/" activeClassName="header__nav-content__active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  activeClassName="header__nav-content__active"
                >
                  Dashboard
                </NavLink>
              </li>

              <NavLink
                to="/analysis"
                activeClassName="header__nav-content__active"
              >
                Analysis
              </NavLink>
            </ul>
            <h5>
              <Link to="/login">Log in</Link>
            </h5>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
