import React from "react";
import { Link, Route } from "react-router-dom";

const AnalysisComponent = ({ match }) => (
  <h3>Requested Param: {match.params.id}</h3>
);
const AnalysisPage = ({ match }) => (
  <div>
    <h2>Analysis</h2>

    <ul>
      <li>
        <Link to={`${match.url}/technical`}>Technical</Link>
      </li>
      <li>
        <Link to={`${match.url}/volatility-skew`}>Volatility skew</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={AnalysisComponent} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select an analysis method:</h3>}
    />
  </div>
);

export default AnalysisPage;
