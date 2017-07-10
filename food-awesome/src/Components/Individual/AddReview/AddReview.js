import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../../Actions/Review';

import './AddReview.css';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      starClicked: false,
      pic: null
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

  starEnter = (event) => {
    if(!this.state.starClicked){
      let stars = document.getElementById('starImages').childNodes;
      for (var i = 0; i < event.target.dataset.rating ; i++) {
        stars[i].classList.remove('fa-star-o');
        stars[i].classList.add('fa-star');
      }
    }
  }

  starLeave = (event) => {
    if(!this.state.starClicked){
      let stars = document.getElementById('starImages').childNodes;
      stars.forEach((star,index) => {
        star.classList.remove('fa-star');
        star.classList.add('fa-star-o');
      })
    }
  }

  starClicked = (event) => {
    let newReview = this.state.review;
    newReview.star = event.target.dataset.rating
    this.setState({
      review: newReview,
      starClicked: true
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
      // newReview["user"] = this.props.currentUser._id
    }
    this.setState({
      review: newReview
    })
  }

  addReview = () => {
    this.props.addReview(this.state.pic,this.state.review);//,this.props.user_id);
  }

  closeReviewBox = () => {
    this.props.closeReviewBox();
  }

  render() {
    return (
      <div id="reviewContainer">
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
          <div className="form-group">
            <label>Star</label>
            <div className="star-rating" id='starImages'>
              <span className="fa fa-star-o star"
                    data-rating="1"
                    onMouseEnter={this.starEnter}
                    onMouseLeave={this.starLeave}
                    onClick = {this.starClicked}></span>
              <span className="fa fa-star-o star"
                    data-rating="2"
                    onMouseEnter={this.starEnter}
                    onMouseLeave={this.starLeave}
                    onClick = {this.starClicked}></span>
              <span className="fa fa-star-o star"
                    data-rating="3"
                    onMouseEnter={this.starEnter}
                    onMouseLeave={this.starLeave}
                    onClick = {this.starClicked}></span>
              <span className="fa fa-star-o star"
                    data-rating="4"
                    onMouseEnter={this.starEnter}
                    onMouseLeave={this.starLeave}
                    onClick = {this.starClicked}></span>
              <span className="fa fa-star-o star"
                    data-rating="5"
                    onMouseEnter={this.starEnter}
                    onMouseLeave={this.starLeave}
                    onClick = {this.starClicked}></span>
              <input type="hidden" name="whatever1" className="rating-value" value="2.56"/>
            </div>
          </div>
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
    restaurants: state.restaurants,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (pic, newReview) => {dispatch(addReview(pic, newReview));},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddReview);
