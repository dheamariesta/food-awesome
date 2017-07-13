import React, {Component} from 'react';
import { connect } from 'react-redux';
import RestaurantListView from '../RestaurantListView/RestaurantListView';

class RestaurantList extends Component {
  renderRestaurants = () => {
    let restaurantArray = this.props.restaurants;
    console.log(restaurantArray)
    if(restaurantArray.length===0){
      return (<div>no Restaurant yet</div>)
    }
    return restaurantArray.map( (restaurant,index) => {
      return (<RestaurantListView restaurant={restaurant} key={restaurant._id}/>)
    })
  }

  render() {
    return (
      <div className="row" id="restaurantList">
        <div className="col-md-12" id="search">
        <button type="submit" className="btn btn-primary" onClick={this.addNewRestaurant}>Add New Restaurant</button>
        <input className="form-control" type="text" placeholder="Search"/>
        <div>
          {this.renderRestaurants()}
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantList);
