import React, { Component } from "react";
import firebase from "./../firebase";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
    isLoggedIn: false
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess())
          .catch(this.onLoginFailure());
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
  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: "",
      isLoggedIn: true
    });
    console.log("youre logged in now");
  }
  onLoginFailure() {
    this.setState({ loading: false, error: "Authentication Failed!" });
  }

  renderContent() {
    const location = {
      pathname: "/dashboard",
      state: { fromLogIn: true }
    };
    if (this.state.isLoggedIn) {
      return (
        <div>
          <button
            onClick={() => firebase.auth().signOut()}
          >{`Log Out: this.state.isLoggedIn=${this.state.isLoggedIn}`}</button>

          <Redirect to={location} />
        </div>
      );
    }
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

            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default LoginPage;
