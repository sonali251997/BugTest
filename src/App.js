import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import FormIndex from "./form";
import FormTesting from "./formTesting";
import JsonData from "./jsonData";
import RenderForm from "./RenderForm";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={FormTesting} />
        <Route path="/next-page" component={JsonData} />
        <Route path='/render-form' component={RenderForm}/>
      </Router>
    );
  }
}

export default App;
