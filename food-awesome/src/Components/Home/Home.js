import React, {Component} from 'react';

import HomeContainer from './HomeContainer/HomeContainer';

export class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container-fluid">
        <HomeContainer/>
      </div>
    );
  }
}

export default Home;
