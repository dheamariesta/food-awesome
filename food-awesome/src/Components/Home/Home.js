import React, {Component} from 'react';

import HomeContainer from './HomeContainer/HomeContainer';
import Login from '../Login/Login';
import Loading from '../Loading/Loading';

import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      loading: true
    }
  }

  render() {
    const isLoggedIn = this.props.user._id;
    const state = this.state;
    console.log(state);
    console.log(this.state.loading);
    // console.log(this.props.user);
    // console.log(isLoggedIn);
    if (this.state.loading) {
      return <Loading/>;
    } else {
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

  componentDidMount() {
    const state = this.state;
    this.setState({
      loading: false
    });
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
