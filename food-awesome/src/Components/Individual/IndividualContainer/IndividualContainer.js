import React, {Component} from 'react';
// import RestaurantItem from '../../Home/RestaurantItem/RestaurantItem';
import Scroll from '../Scroll/Scroll';
import Poster from '../Poster/Poster';

export class IndividualContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Scroll/>
          <Poster/>
        </div>
      </div>
    );
  }
}

export default IndividualContainer;