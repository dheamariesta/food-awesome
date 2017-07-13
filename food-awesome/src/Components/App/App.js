// Import modules
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'
//Import Components
import Home from "../Home/Home";
import Individual from "../Individual/Individual";
import Admin from "../Admin/Admin";
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import AccountPage from '../AccountPage/AccountPage';

import Login from "../Login/Login";


// Import Static Files
import './App.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {

    return (
      <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={"/individual"}  component={Individual}/>
          <Route path="/account"  component={AccountPage}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route component={Error}/>
        </Switch>
      </Router>
      <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeHome: state.activeHome
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
