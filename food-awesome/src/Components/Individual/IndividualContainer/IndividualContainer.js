import React, {Component} from 'react';
// import RestaurantItem from '../../Home/RestaurantItem/RestaurantItem';
import Scroll from '../Scroll/Scroll';
import Poster from '../Poster/Poster';

export class IndividualContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Scroll restaurant={this.props.restaurant} reviews={this.props.reviews}/>
          <Poster img={this.props.restaurant.picHome}/>

        </div>
      </div>
    );
  }
}

export default IndividualContainer;
