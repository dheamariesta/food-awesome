import React, {Component} from 'react';
import facebooklogo from './glyphicons-social-31-facebook.png';
import './Footer.css'
export class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="row footer">
        <div className="col-sm-4 about">
          <span id="about">About us</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-sm-2 col-sm-offset-5 share">
          Visit us at: <img src={facebooklogo}/>
        </div>
      </div>

    );
  }
}

export default Footer;
