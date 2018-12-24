import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AnalysisPage from "./components/AnalysisPage";
import HelpPage from "./components/HelpPage";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route path={`/(dashboard|analysis|help|login)`} component={Header} />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/analysis" component={AnalysisPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
