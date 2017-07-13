import React, {Component} from 'react';

import HomeContainer from './HomeContainer/HomeContainer';
import Login from '../Login/Login';

import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    }
  }

  render() {
    const isLoggedIn = this.props.user._id;
    // console.log(this.props.user);
    // console.log(isLoggedIn);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="isLoggedIn">
            <HomeContainer/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("map");
  // console.log(state);
  // console.log(state.user);
    return {
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
