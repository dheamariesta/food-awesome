import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getUser } from '../../Actions/User';
import './Header.css';
import logo from './logo.png';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    }
  }

  logout = (e) => {
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
        <div className="col-sm-2" id="logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <div className="col-sm-6" id="headerSearchBar">
          {/*<div className="input-group stylish-input-group">
            <input type="text" className="form-control"  placeholder="Search" />
            <span className="input-group-addon">

                <button type="submit" onClick=this.onClick>
                    <span className="glyphicon glyphicon-search"></span>
                </button>
            </span>
        </div>*/}
        </div>
        <div className="col-sm-2">
          { this.props.user.email === undefined ? <Link to="/login"><div className="create">Login</div></Link> : <Link to="/account"><div className="create">{this.props.user.email}</div></Link> }
        </div>
        <div className="col-sm-2">
          { this.props.user.email === undefined ? <a href="/login"><div className="create">Create Account</div></a> : <a href="/" onClick={this.logout}><div className="create">Logout</div></a> }
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
