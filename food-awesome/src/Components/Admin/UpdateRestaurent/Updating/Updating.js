import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateRestaurent } from '../../../../Actions/Admin';

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      star:"",
      describeHome:"",
      describeIndividual:"",
      picHome:"",
      picIndividual:""
      // name: this.prop.restaurent.name,
      // star: this.prop.restaurent.star,
      // describeHome: this.prop.restaurent.describeHome,
      // describeIndividual: this.prop.restaurent.describeIndividual,
      // picHome: this.prop.restaurent.picHome,
      // picIndividual: this.prop.restaurent.picIndividual
    }
  }

  nameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  starInput = (event) => {
    this.setState({
      star: event.target.value
    })
  }

  descriptionInput = (event) => {
    if(event.target.name=="forHome"){
      this.setState({
        describeHome: event.target.value
      })
    }
    if(event.target.name=="forIndividual"){
      this.setState({
        describeIndividual: event.target.value
      })
    }
  }

  fileInput = (event) => {
    if(event.target.name=="forHome"){
      this.setState({
        picHome: event.target.value
      })
    }
    if(event.target.name=="forIndividual"){
      this.setState({
        picIndividual: event.target.value
      })
    }
  }

  submit = () => {
    let newInfo = this.state;
    this.props.updateRestaurent(newInfo);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input type="text"
                 className="form-control"
                 aria-describedby="emailHelp"
                 placeholder="Name"
                 onChange={this.nameInput}
                 defaultValue={this.prop.restaurent.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Number of initial Stars</label>
          <select multiple className="form-control"
                  defaultValue={this.prop.restaurent.star}
                  onChange = {this.starInput}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label>desciption in home page</label>
          <textarea className="form-control"
                    name="forHome"
                    rows={3}
                    placeholder="description in home"
                    onChange={this.descriptionInput}
                    defaultValue={this.prop.restaurent.describeHome} />
        </div>
        <div className="form-group">
          <label>desciption in individual page</label>
          <textarea className="form-control"
                    name="forIndividual"
                    rows={3}
                    placeholder="description in individual"
                    onChange={this.descriptionInput}
                    defaultValue={this.prop.restaurent.describeIndividual} />
        </div>
        <div className="form-group">
          <label>Picture input</label>
          <input
                 type="file"
                 className="form-control-file"
                 id="pictureInput"
                 aria-describedby="fileHelp"
                 onChange={this.fileInput}
                 value={this.state.picHome}/>
           <input
                  type="file"
                  className="form-control-file"
                  id="pictureInput"
                  aria-describedby="fileHelp"
                  onChange={this.fileInput}
                  value={this.state.picIndividual}/>
          <small>please press "shift" or "control" on your own for multiple selection</small>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
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
    updateRestaurent: (newInfo) => {dispatch(updateRestaurent(newInfo));}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Updating);
