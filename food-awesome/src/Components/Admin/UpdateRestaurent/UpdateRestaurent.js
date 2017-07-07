import React, {Component, propTypes} from 'react';
import { connect } from 'react-redux';
import Updating from './Updating/Updating';
import { filterRestaurentToUpdate } from '../../../API/AdminAPI';


class UpdateRestaurent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nameForUpdate: ""
    }
  }

  nameForUpdate = (event) => {
    this.setState({
      nameForUpdate:event.target.value
    })
  }

  renderRestaurent = () =>{
    const restaurent = filterRestaurentToUpdate(this.props.restaurents,this.state.nameForUpdate)
    if(restaurent.length === 0){
      return (<div>Wrong/No name</div> )
    }
    return restaurent.map( (restaurent) => {
      return (
        <Updating restaurent={restaurent}/>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <h4>Updating</h4>
          <p>to update restaurent, enter in the current name </p>
          <input type="text"
                 className="form-control"
                 aria-describedby="emailHelp"
                 placeholder="Name"
                 onChange={this.nameForUpdate}
                 value={this.state.name}/>
         </div>
         <div>{this.renderRestaurent()}</div>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurents: state.admin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateRestaurent);
