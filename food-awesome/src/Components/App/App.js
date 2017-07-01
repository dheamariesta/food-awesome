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
          <Route exact path="/" component={Header}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>

    );
  }
}

export default App;