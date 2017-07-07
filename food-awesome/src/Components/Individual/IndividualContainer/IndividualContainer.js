import React, {Component} from 'react';
import RestaurantItem from '../../Home/RestaurantItem/RestaurantItem';
export class IndividualContainer extends Component {
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
        </div>
      </div>
    );
  }
}

export default IndividualContainer;
