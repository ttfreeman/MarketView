import React, { Component } from "react";
import firebase from "./../firebase";

class LoginPage extends Component {
  state = { email: "", password: "", error: "" };

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication Failed!" });
          });
      });
  };
  handleChangeEmail = event => {
    const email = event.target.value;
    this.setState({ email });
  };
  handleChangePassword = event => {
    const password = event.target.value;
    this.setState({ password });
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Volatility View</h1>
          <p>It's time to get your investment under control.</p>
          <form onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                id="inputEmail"
                required=""
                autoFocus
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div>
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="inputPassword"
                required=""
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>

            <p>{this.state.error}</p>

            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
