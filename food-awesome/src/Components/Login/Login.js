import React, {Component} from 'react';
import './Login.css'
import logo from './logo.png'
class Login extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <img src={logo} id="logo"/>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Login via site</h3>
              </div>
              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form">
                  <fieldset>
                    <div className="form-group">

                      {/* Email input is here */}
                      <input className="form-control" placeholder="yourmail@example.com" name="email" type="text" />

                    </div>
                    <div className="form-group">

                      {/* Password input is here */}
                      <input className="form-control" placeholder="Password" name="password" type="password" defaultValue />

                    </div>

                    {/* Login button is here */}
                    <input className="btn btn-lg btn-success btn-block" type="submit" defaultValue="Login" />

                  </fieldset>
                </form>
                <hr />
                <center><h4>OR</h4></center>

                {/* Login button for facebook is here */}
                <input className="btn btn-lg btn-facebook btn-block" type="submit" defaultValue="Login via facebook" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
