import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getReviewOfUser } from '../../Actions/Review';
import Review from './Review/Review';

export class AccountPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      user:"",
      seeReview: false,
    }
  }

  getReviewOfUser = () => {
    this.props.getReviewOfUser(this.props.user._id)
    this.setState({
      seeReview: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h3>Profile Information</h3>
        </div>
        <form className="form-horizontal" action="/account/profile" method="POST">

          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="email">Email</label>
            <div className="col-sm-7">
              <input className="form-control" type="email" name="email" id="email" defaultValue="" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="name">Name</label>
            <div className="col-sm-7">
              <input className="form-control" type="text" name="name" id="name" defaultValue="" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Gender</label>
            <div className="col-sm-6">
              <label className="radio col-sm-3">
                <input type="radio" name="gender" defaultValue="male" data-toggle="radio" />
                <span>Male</span>
              </label>
              <label className="radio col-sm-3">
                <input type="radio" name="gender" defaultValue="female" data-toggle="radio" />
                <span>Female</span>
              </label>
              <label className="radio col-sm-3">
                <input type="radio" name="gender" defaultValue="other" data-toggle="radio" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-4">
              <button className="btn btn btn-primary" type="submit">
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
        <form className="form-horizontal" action="/account/delete" method="POST">
          <div className="form-group">
            <p className="col-sm-offset-3 col-sm-4">You can delete your account, but keep in mind this action is irreversible.
            </p>
            <input type="hidden" name="_csrf" defaultValue="El4kNAmRej76CfRNhiFTwFwmB3CgmHRe0B6sM=" />
            <div className="col-sm-offset-3 col-sm-4">
              <button className="btn btn-danger" type="submit">
                <i className="fa fa-trash">
                </i>Delete my account
              </button>
            </div>
          </div>
        </form>
        <div className="page-header">
          <h3>Linked Accounts</h3>
        </div>
        <div className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-4">
              <p>
                <a className="text-danger" href="/account/unlink/facebook">Unlink your Facebook account</a>
              </p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.getReviewOfUser}>View my Reviews</button>
        {
          this.state.seeReview? (
            <Review/>
          ): null
        }
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
