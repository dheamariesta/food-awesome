import React, {Component} from 'react';
import { connect } from 'react-redux';
import {activeHome} from '../../../Actions/Home/activeHome'
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null
    }
  }

  componentDidMount(){
    this.setState({
      restaurants: this.props.restaurants
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      restaurants: nextProps.restaurants
    })
  }

  onClick = (id, active) => {
    // console.log('active home', active)
    this.props.activeHome(active)
    // console.log('clicked id', id)
    // axios.get('/api/' + id)
    // .then((response) =>{
    //   //dispatch(activeHome(response.data))
    //   console.log(response.data);
    //
    // })
    // .catch((error) =>{
    //   console.log(error);
    // });
  }
  //console.log('restaurants', restaurants)
  renderRestaurants = () => {
    //console.log('render_func', restaurants)
    let restaurants = this.props.restaurants;
    if (restaurants.length === 0) {
      return  (<div>Loading restaurant list...</div>)
    } else {
      return restaurants.map((restaurant) => {
        // console.log('map')
        return (
          <Link to={'/individual/' + restaurant.name} key={restaurant.id} >
          <RestaurantItem name={restaurant.name}
                        id = {restaurant.id}
                        description={restaurant.describeHome}
                        img={restaurant.picHome}
                        star={restaurant.star}
                        onClick={this.onClick}
                        _id = {restaurant._id}
                        describeIndividual={restaurant.describeIndividual}
                        reviews={restaurant.reviews}/>
          </Link>
        )
      });
    }

  }


  render() {
    //const res = this.renderRestaurants(this.state.restaurants)

    return (

      <div className="container-fluid">
        <div className="row">
          {this.renderRestaurants()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    activeHome: state.activeHome
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activeHome: (active) => {dispatch(activeHome(active));}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
