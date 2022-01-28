import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";

import Navbar from "./navbar";
import Home from "./home";
import View from "./view";
import Create from "./create";

export default class App extends Component {
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
              {/* <Route path="/blog" component={Blog} /> */}
              {/* <Route path="/b/:slug" component={BlogDetail} />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null} */}
              {/* <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
