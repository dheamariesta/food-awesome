import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';
import { getReviewOfUser } from '../../Actions/Review';
import Review from './Review/Review';

export class AccountPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: "",
      email: "",
      seeReview: false
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

  getReviewOfUser = () => {
    this.props.getReviewOfUser(this.props.user._id)
    this.setState({
      seeReview: true
    })

  }

  render() {
    console.log(this.props.user.email);
    console.log(this.state.email);

    return (
      <div className="container">
        <div className="page-header">
          <h3>Profile Information</h3>
        </div>
        <form className="form-horizontal">

          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="email">Email</label>
            <div className="col-sm-7">
              <input className="form-control" type="email" name="email" id="email" ref={(email) => this.email = email} onChange={this.onChange}/>
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
        <form className="form-horizontal" action="/account/password" method="POST">
          <input type="hidden" name="_csrf" defaultValue="El4kNAmRej76CfRNhiFTwFwmB3CgmHRe0B6sM=" />
          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="password">New Password</label>
            <div className="col-sm-7">
              <input className="form-control" type="password" name="password" id="password" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="confirmPassword">Confirm Password</label>
            <div className="col-sm-7">
              <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-4">
              <button className="btn btn-primary" type="submit">
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
    );
  }
};

const mapStateToProps = (state) => {
  console.log("in mapStateToProps " + state.user.id);
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewOfUser: (user_id) => { dispatch(getReviewOfUser(user_id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
