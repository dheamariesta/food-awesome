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
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

// Import Static Files
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/individual" component={Individual}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
