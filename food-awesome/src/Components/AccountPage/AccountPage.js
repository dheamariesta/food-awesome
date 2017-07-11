import React, {Component} from 'react';

import { connect } from 'react-redux';

export class AccountPage extends Component {
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
            <label className="col-sm-3 control-label" htmlFor="location">Location</label>
            <div className="col-sm-7">
              <input className="form-control" type="text" name="location" id="location" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label" htmlFor="website">Website</label>
            <div className="col-sm-7">
              <input className="form-control" type="text" name="website" id="website" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Gravatar</label>
            <div className="col-sm-4">
              <img className="profile" src="https://gravatar.com/avatar/79c650ccd7de7772dc870b135eec6657?s=200&d=retro" width={100} height={100} />
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
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
