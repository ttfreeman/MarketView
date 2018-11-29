import React, { Component } from "react";
import firebase from "./../firebase";
import "./../styles/signin.css";

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
      <div className="text-center">
        <form className="form-signin" onSubmit={this.handleLogin}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <p style={{ color: "red" }}>{this.state.error}</p>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
