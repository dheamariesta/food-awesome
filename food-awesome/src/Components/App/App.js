// Import modules
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//Import Components
import Header from "../Header/Header";
import Admin from "../Admin/Admin";

// Import Static Files
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Admin}/>
          <Route path="/todo/:test" component={Todo}/>
          <Route component = {notFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
