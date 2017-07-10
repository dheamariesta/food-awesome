import React, {Component} from 'react';
import { connect } from 'react-redux';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.props.restaurants
    }
  }

    //console.log('restaurants', restaurants)
    renderRestaurants = (restaurants) => {
      //console.log('render_func', restaurants)
      if (restaurants.length === 0) {
        return  <div>No restaurants</div>
      } else {
        return restaurants.map((restaurant) => {
          console.log('map')
          return (
            <RestaurantItem name={restaurant.name}
                          id = {restaurant.id}
                          key={restaurant.id}
                          description={restaurant.describeHome}/>
          )
        });
      }

    }


  render() {
    const res = this.renderRestaurants(this.props.restaurants)

    return (

      <div className="container-fluid">
        <div className="row">
          {res}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
