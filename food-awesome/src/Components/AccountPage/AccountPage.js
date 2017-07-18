import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';
// import { getReviewOfUser } from '../../Actions/Review';
import Review from './Review/Review';
import Header from '../Header/Header';

import './AccountPage.css';

export class AccountPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: "",
      email: "",
      password: "",
    }
  }

  deleteAccount = (e) =>  {
    e.preventDefault();
    console.log("deleteAccount called");
    axios.post('/auth/account/delete')
    .then( (response) => {
      console.log("AJAX: Deleted @ '/auth/account/delete'");
      window.location.href = "/";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  onChange = (e) => {
    var state = this.state;
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    //console.log(state);
    this.setState(state);
    console.log(state);
  }

  updateProfile = (e) => {
    e.preventDefault();
    console.log("updateProfile called");
    let data = this.state.email;
    console.log(data);
    axios.post('/auth/account/profile', {
      data: data
    })
    .then( (response) => {
      console.log(response);
      console.log("AJAX: Updated @ '/auth/account/profile'");
      window.location.href = "/";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  updatePassword = (e) => {
    e.preventDefault();
    console.log("updatePassword called");
    let data = this.state.password;
    console.log(data);
    axios.post('/auth/account/password', {
      data: data
    })
    .then( (response) => {
      console.log(response);
      console.log("AJAX: Updated @ '/auth/account/password'");
      window.location.href = "/";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  // getReviewOfUser = () => {
  //   this.props.getReviewOfUser(this.props.user._id)
  // }

  onClick = (event) => {
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    let panel1 = document.getElementById("home");
    let panel2 = document.getElementById("profile")

    if(tab1.className==="active"){
      tab2.classList.add("active");
      panel2.classList.add("active");
      tab1.classList.remove("active");
      panel1.classList.remove("active");
      // this.getReviewOfUser();
    }else{
      tab1.classList.add("active");
      panel1.classList.add("active");
      tab2.classList.remove("active");
      panel2.classList.remove("active");
    }

  }

  render() {


    return (
      <div>
        <Header/>
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <ul className="nav nav-tabs" role="tablist">
                    <li id="tab1" role="presentation" className="active" onClick={this.onClick} >
                      <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Profile</a>
                    </li>
                    <li id="tab2" role="presentation" onClick={this.onClick}>
                      <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">My Reviews</a>
                    </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="home">
                    <div className="page-header">
                      <h3>Profile Information</h3>
                    </div>
                    <form className="form-horizontal">

                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="email">Email</label>
                        <div className="col-sm-7">
                          <input className="form-control" type="email" name="email" id="email"
                          ref={(email) => this.email = email} onChange={this.onChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-4">
                          <button className="btn btn btn-primary" type="submit" onClick={this.updateProfile}>
                            <i className="fa fa-pencil">
                            </i>Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="page-header">
                      <h3>Change Password</h3>
                    </div>
                    <form className="form-horizontal">
                      <input type="hidden" name="_csrf" defaultValue="El4kNAmRej76CfRNhiFTwFwmB3CgmHRe0B6sM=" />
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="password">New Password</label>
                        <div className="col-sm-7">
                          <input className="form-control" type="password" name="password" id="password"
                          ref={(password) => this.password = password} onChange={this.onChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="col-sm-7">
                          <input className="form-control" type="password" name="confirmPassword" id="confirmPassword"
                          ref={(confirmPassword) => this.confirmPassword = confirmPassword} onChange={this.onChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-4">
                          <button className="btn btn-primary" type="submit" onClick={this.updatePassword}>
                            <i className="fa fa-lock">
                            </i>Change Password
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="page-header">
                      <h3>Delete Account</h3>
                    </div>
                    <form className="form-horizontal">
                      <div className="form-group">
                        <p className="col-sm-offset-3 col-sm-4">You can delete your account, but keep in mind this action is irreversible.
                        </p>
                        <input type="hidden" name="_csrf" defaultValue="El4kNAmRej76CfRNhiFTwFwmB3CgmHRe0B6sM=" />
                        <div className="col-sm-offset-3 col-sm-4">
                          <button className="btn btn-danger" type="submit" onClick={this.deleteAccount}>
                            <i className="fa fa-trash">
                            </i>Delete my account
                          </button>
                        </div>
                      </div>
                    </form>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="profile">
                      <Review/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {

  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getReviewOfUser: (user_id) => { dispatch(getReviewOfUser(user_id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
