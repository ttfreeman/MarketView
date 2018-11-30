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
      <div>
        <form onSubmit={this.handleLogin}>
          <h1>Please sign in</h1>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            required=""
            autoFocus
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            placeholder="Password"
            required=""
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <p style={{ color: "red" }}>{this.state.error}</p>

          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
