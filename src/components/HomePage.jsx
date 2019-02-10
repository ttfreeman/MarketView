import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div className="homepage-header">
        <div className="homepage-header__logobox">
          <img
            src="/img/logo-white.png"
            alt="Logo"
            className="homepage-header__logo"
          />
        </div>
        <div className="homepage-header__titlebox">
          <h1 className="homepage-header__primary">
            <span className="homepage-header__primary--main">
              Volatility View
            </span>
            <span className="homepage-header__primary--sub">
              Advanced Insight into Options Market
            </span>
          </h1>
          <Link
            to=""
            className="homepage-btn homepage-btn--white homepage-btn--animated"
          >
            Discover More
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
