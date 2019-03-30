import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route exact path="/dashboard/:type" component={Dashboard} />
          <Route exact path="/bar-graph" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
