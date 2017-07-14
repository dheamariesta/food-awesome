import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualContainer from './IndividualContainer/IndividualContainer';
import {activeHome} from '../../Actions/Home/activeHome';
import Header from '../Header/Header';
import './Individual.css';

export class Individual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: this.props.active,
      reviews: null
    }
  }

  componentWillMount() {
    if(!this.props.active.hasOwnProperty('name')){
      window.location.href = "/"
    }
  }
  render() {
    //console.log('thispropsactive',this.props.active)


    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <IndividualContainer restaurant={this.state.restaurant}/>
        </div>
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
