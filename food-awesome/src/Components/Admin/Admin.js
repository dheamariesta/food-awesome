import React, {Component, propTypes} from 'react';
import { connect } from 'react-redux';
import Compose from './Compose/Compose';
import UpdateRestaurent from './UpdateRestaurent/UpdateRestaurent';

class Admin extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Compose />
        <UpdateRestaurent />
        <DeleteRestaurent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
