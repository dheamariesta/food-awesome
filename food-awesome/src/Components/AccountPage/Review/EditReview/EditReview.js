import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReview, deleteReview } from '../../../../Actions/Review';
import Star from '../../../Individual/AddReview/Star/Star';

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      activeReview: "",
      picReview: null,
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
// restraurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },

  componentWillReceiveProps(nextProps){
    let activeReviewObject = {};
    nextProps.reviews.forEach((review,index,arr) => {
      if(review._id===nextProps.activeUserReview){
         activeReviewObject = review
      }
    })
    this.setState({
      review: activeReviewObject
    })
  }

  passStarValue = (noOfStar) => {
    let review = this.state.review;
    review.star = noOfStar;
    this.setState({
      review: review
    })
  }

  onChange = (event) => {
    let review = this.state.review;
    if(event.target.id==="picReview"){
      this.setState({
        picReview: event.target.files[0]
      })
    }else{
      review[event.target.id] = event.target.value;
    }
    this.setState({
      review: review
    })
  }

  updateReview = () => {
    this.props.updateReview(this.state.picReview, this.state.review);
  }

  deleteReview = () => {
    this.props.deleteReview(this.state.review._id);
  }

  render() {
    return (
      <div>
      <div className="form-group">
        <label>Title</label>
        <input id = "title"
               type="text"
               className="form-control"
               aria-describedby="emailHelp"
               placeholder="Title"
               onChange={this.onChange}
               value={this.state.review.title? this.state.review.title: ""}/>
      </div>
      <Star passStarValue={this.passStarValue}/>
      <div className="form-group">
        <label>Say something?</label>
        <textarea id="description"
                  className="form-control"
                  name="forIndividual"
                  rows={3}
                  placeholder="description"
                  onChange={this.onChange}
                  value={this.state.review.description? this.state.review.description: ""}/>
      </div>
      <div className="form-group">
        <label>Picture input</label>
        <input id="picReview"
               type="file"
               className="form-control-file"
               aria-describedby="fileHelp"
               onChange={this.onChange}
               />
      </div>
      <button type="submit" className="btn btn-primary" onClick={this.updateReview}>Update</button>
      <button type="submit" className="btn btn-danger" onClick={this.deleteReview}>Delete</button>
       </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.userReview,
    activeUserReview: state.activeUserReview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (picReview, review) => {dispatch(updateReview(picReview, review));},
    deleteReview: (_id) => {dispatch(deleteReview(_id));}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditReview);
