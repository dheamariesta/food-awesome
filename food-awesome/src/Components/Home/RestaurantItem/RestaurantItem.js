import React, {Component} from 'react';
import image from './Japan.jpg';
import './RestaurantItem.css'
export class RestaurantItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-sm-3 item">
        <div className="col-sm-12">
          <img src={image} className="restaurant-image" />
          <h4>Restaurant Name</h4>
          <span>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
        </div>
      </div>
    );
  }
}

export default RestaurantItem;
