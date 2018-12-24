import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div className="homepage-header">
        <div className="homepage-logobox">
          <img src="/img/logo-white.png" alt="Logo" className="homepage-logo" />
        </div>
        <div className="homepage-titlebox">
          <h1 className="homepage-primary">
            <span className="homepage-primary-main">Volatility View</span>
            <span className="homepage-primary-sub">
              Advanced Insight into Options Market
            </span>
          </h1>
          <Link to="" className="btn btn--white btn--animated">
            Discover More
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
