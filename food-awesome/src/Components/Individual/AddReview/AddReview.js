import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../../Actions/Review';
import Star from './Star/Star';

import './AddReview.css';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      pic: null,
      adminMessage:"",
      isLoggedIn: false
    }
  }

  // Review Model
//   title: String,
// star: Number,
// votes: Number,
// description: String,
// pic: String,
// picPublicId:String,
// id: String,
// user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  passStarValue = (noOfStar) => {
    let newReview = this.state.review;
    newReview.star = noOfStar;
    this.setState({
      review: newReview
    })
  }

  onChange = (event) => {
    let newReview = this.state.review;
    if(event.target.id==="pic"){
      this.setState({
        pic: event.target.files[0]
      })
    }else{
      newReview[event.target.id] = event.target.value;
    }
    this.setState({
      review: newReview
    })
  }

  addReview = () => {
    let newReview = this.state.review;
    let propArray = ['title', 'description', 'star'];
    let missing = false;
    let messageTemplate = "please enter ";
    propArray.forEach((prop,index) => {
      if(!(prop in newReview)){
        messageTemplate+= (prop + ", ");
        missing = true;
      }
    })
    this.setState({
      missing: missing,
      adminMessage: messageTemplate
    })

    if(!missing){
      newReview.user_id = this.props.user._id;
      newReview.restaurant_id = this.props.activeHome._id;
      this.props.addReview(this.state.pic,newReview);
    }
  }

  closeReviewBox = () => {
    this.props.closeReviewBox();
  }

  render() {
    return (
      <div id="reviewContainer">
        <div className="adminMessage">{
          this.state.missing? (this.state.adminMessage) : null
        }</div>
        <h4>Your Review</h4>
          <div className="form-group">
            <label>Title</label>
            <textarea id="title"
                      className="form-control"
                      rows={2}
                      placeholder="Enter reviews here"
                      onChange={this.onChange}
                      value={this.state.review.title? this.state.review.title: ""}/>
          </div>
          <Star passStarValue={this.passStarValue}/>
          <div className="form-group">
            <label>Say something?</label>
            <textarea id="description"
                      className="form-control"
                      rows={5}
                      placeholder="Enter reviews here"
                      onChange={this.onChange}
                      value={this.state.review.description? this.state.review.description: ""}/>
          </div>
          <div className="form-group">
            <label>Your Favorite Food</label>
            <input id="pic"
                   type="file"
                   className="form-control-file"
                   aria-describedby="fileHelp"
                   onChange={this.onChange}
                   />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addReview}>Submit</button>
          <button type="submit" className="btn btn-danger" onClick={this.closeReviewBox}>Discard</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeHome: state.activeHome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (pic, newReview) => {dispatch(addReview(pic, newReview));},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddReview);
