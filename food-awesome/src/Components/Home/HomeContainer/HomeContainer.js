import React, {Component} from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
export class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <RestaurantItem/>
          <RestaurantItem/>
          <RestaurantItem/>
          <RestaurantItem/>
          <RestaurantItem/>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
