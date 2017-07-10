import React, {Component} from 'react';
import share from './glyphicons-309-share-alt.png'
import image from './Japan.jpg';
import './RestaurantItem.css'
class RestaurantItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-sm-3 item">
        <div className="col-sm-12">
          <img src={image} className="restaurant-image" />
          <a href="#">
            <img src={share} id="share-button" className="hover"/>
          </a>
          <h4>{this.props.name}</h4>
          <span>Description: {this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default RestaurantItem;
