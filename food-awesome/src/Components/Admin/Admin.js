import React, {Component, propTypes} from 'react';
import { connect } from 'react-redux';
import Compose from './Compose/Compose';
import RestaurantList from './RestaurantList/RestaurantList';

class Admin extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row todo">
          <div className="col-md-3" id="RestaurantList">
            <RestaurantList/>
          </div>
          <div className="col-md-9" id="RestaurantEdit">
            <Compose />
          </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
