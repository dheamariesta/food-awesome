import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { addRestaurent } from '../../../Actions/Admin';

class Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      star:"",
      describeHome:"",
      describeIndividual:"",
      picHome:"",
      picIndividual:""
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
    let newRestraurent = this.state;
    this.props.addRestaurent(newRestraurent);
  }

  render() {
    return (
      <div>Admin Page

        <div className="form-group">
          <label>Name</label>
          <input type="text"
                 className="form-control"
                 aria-describedby="emailHelp"
                 placeholder="Name"
                 onChange={this.nameInput}
                 value={this.state.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Number of initial Stars</label>
          <select multiple className="form-control" onChange = {this.starInput}>
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
                    value={this.state.describeHome}/>
        </div>
        <div className="form-group">
          <label>desciption in individual page</label>
          <textarea className="form-control"
                    name="forIndividual"
                    rows={3}
                    placeholder="description in individual"
                    onChange={this.descriptionInput}
                    value={this.state.describeIndividual}/>
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
const mapStateToProps = (state) => {  // takes the output of reducer as "state"
                                      // putting state into props of this component
  return {
    restaurents: state.admin
  }
}

const mapDispatchToProps = (dispatch) => {  // putting specific functions that uses dispatch into props
                                          // used in line 31: this.props.createTodo
  return {
    addRestaurent: (newRestraurent) => {dispatch(addRestaurent(newRestraurent));}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compose);
