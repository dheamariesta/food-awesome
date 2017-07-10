import React, {Component} from 'react';
import Header from '../Header/Header';
import HomeContainer from './HomeContainer/HomeContainer';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isLoggedIn = this.props.user._id;
    console.log(this.props.user);
    console.log(isLoggedIn);

    return (
      <div className="container-fluid">
        <Header/>
        <div className="row">
          <div className="isLoggedIn">
            <HomeContainer/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("map");
  console.log(state);
  console.log(state.user);
    return {
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
