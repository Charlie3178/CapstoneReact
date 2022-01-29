import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import View from "./view";
import Create from "./create";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/view" component={View} />
              <Route path="/Create" component={Create} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
