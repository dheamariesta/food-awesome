import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualContainer from './IndividualContainer/IndividualContainer';
import {activeHome} from '../../Actions/Home/activeHome'

import './Individual.css';

export class Individual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: this.props.active
    }
  }
  componentWillReceiveProps(nextProps){
    let restaurants = nextProps.restaurants;
    let restaurantObj = restaurants.filter((el) => {
      return el.name === this.props.active.name
    })
    console.log('componentDidMount',restaurantObj)
    this.setState({
      restaurant: restaurantObj
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <IndividualContainer restaurant={this.state.restaurant}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.activeHome,
    restaurants: state.restaurants
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activeHome: (active) => {dispatch(activeHome(active));}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Individual);
