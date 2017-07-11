import React, { Component } from 'react';

import './Header.css';
import logo from './logo.png'

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-sm-2">
          <img src={logo} />
        </div>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search" />
        </div>
        <div className="col-sm-1">
          <a href="/login">Login</a>
        </div>
        <div className="col-sm-1">
          <a href="/login" id="signup">Create Account</a>
        </div>
      </div>

    );
  }
}
export default Header;
