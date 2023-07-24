import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import FormIndex from "./form";
import JsonData from "./jsonData";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={FormIndex} />
        <Route path="/next-page" component={JsonData} />
      </Router>
    );
  }
}

export default App;
