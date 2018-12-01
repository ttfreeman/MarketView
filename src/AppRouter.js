import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import D3Dash from "./components/D3Dash";
// import AnalysisPage from "./components/AnalysisPage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/d3dash" component={D3Dash} /> */}
        {/* <Route path="/analysis/:id" component={AnalysisPage} /> */}
        <Route path="/help" component={HelpPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
