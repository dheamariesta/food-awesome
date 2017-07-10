// Import modules
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//Import Components
import Home from "../Home/Home";
import Individual from "../Individual/Individual";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";

// Import Static Files
import './App.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/individual" component={Individual}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
