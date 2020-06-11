import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


import MainPage from "./pages/index"
import Suspects from "./pages/posts"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path="/suspects/" component={Suspects} />
        </Switch>
      </Router>
    );
  }
}

export default App;