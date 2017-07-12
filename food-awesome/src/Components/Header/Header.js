import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getUser } from '../../Actions/User';

import './Header.css';
import logo from './logo.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    }
  }

  logout = (e) =>{
    e.preventDefault();
    axios.get('/auth/logout')
    .then( (response) => {
      console.log("AJAX: Logged out @ '/auth/logout'");
      window.location.href = "/";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="row header">
        <div className="col-sm-2">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="col-sm-6">
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search" />
        </div>
        <div className="col-sm-2">
          { this.props.user.email === undefined ? <a href="/login" className="login">Login</a> : <a href="/account" className="login">{this.props.user.email}</a> }
        </div>
        <div className="col-sm-2">
          { this.props.user.email === undefined ? <a href="/login" className="create">Create Account</a> : <a href="/" className="create" onClick={this.logout}>Logout</a> }
        </div>
      </div>

    );
  }

  componentDidUpdate() {
    console.log(this.props.user);
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser:() => {dispatch(getUser());}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
