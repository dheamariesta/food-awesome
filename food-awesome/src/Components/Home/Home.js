import React, {Component} from 'react';
import HomeContainer from './HomeContainer/HomeContainer';

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
