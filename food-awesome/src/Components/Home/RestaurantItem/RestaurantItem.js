import React, {Component} from 'react';
import { connect } from 'react-redux';

import image from './Japan.jpg';
import './RestaurantItem.css'
export class RestaurantItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(this.props.restaurants);
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

const mapStateToProps = (state) => {
  return {
    restaurants: state.admin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);
