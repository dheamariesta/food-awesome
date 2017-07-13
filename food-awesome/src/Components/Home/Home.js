import React, {Component} from 'react';

import HomeContainer from './HomeContainer/HomeContainer';
import Login from '../Login/Login';
import Loading from '../Loading/Loading';

import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    setTimeout(function() { this.setState({loading: false}); }.bind(this), 2000);
  }

  render() {
    const isLoggedIn = this.props.user._id;

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
    return {
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
