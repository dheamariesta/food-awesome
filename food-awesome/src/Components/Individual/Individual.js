import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualContainer from './IndividualContainer/IndividualContainer';


import './Individual.css';

export class Individual extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log('propss at indiv', this.props)
    return (
      <div className="container-fluid">
        <IndividualContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state at individual', state)
  return {
    active: state.activeHome
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Individual);
