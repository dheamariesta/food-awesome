import React, {Component} from 'react';
import Header from '../Header/Header'
import HomeContainer from './HomeContainer/HomeContainer';
import Footer from '../Footer/Footer';
export class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <HomeContainer/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
