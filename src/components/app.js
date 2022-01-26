import React, { Component } from "react";
import axios from "axios";

import Header from "./pages/header";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <LeftContent />
          <RightCOntent />
        </div>
        <Footer />
      </div>
    );
  }
}
