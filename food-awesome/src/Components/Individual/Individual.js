import React, {Component} from 'react';
import Header from '../Header/Header'
import IndividualContainer from './IndividualContainer/IndividualContainer';
import Footer from '../Footer/Footer';

import './Individual.css';

export class Individual extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container-fluid scrollDisplay">
        <Header/>
        <IndividualContainer/>
        <Footer/>
      </div>
    );
  }
}

export default Individual;
