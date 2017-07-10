import React, {Component} from 'react';
import RestTitle from './RestTitle/RestTitle';
import MidSect from './MidSect/MidSect';
import Notes from './Notes/Notes';
import Reviews from './Reviews/Reviews';
import AddReview from '../AddReview/AddReview';

import './Scroll.css'

export class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isAddReviewOpen: false,
}
  }

  closeReviewBox = () => {
    this.setState({ isAddReviewOpen:false })
  }

  reviewBoxOpen = () => {
    this.setState({ isAddReviewOpen: true })
  }

  render() {
    return (
      <div className="col-sm-7 item">
        <div className="col-sm-12">
          <h4>Scroll</h4>
          <RestTitle />
          <MidSect />
          <Notes />
          <Notes />
          <Reviews />
          <span>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.reviewBoxOpen}>Write a Review</button>
        {
          this.state.isAddReviewOpen ? (
            <div>
            <AddReview closeReviewBox={this.closeReviewBox}/>

            </div>
          ) :null
        }
      </div>
    );
  }
}

export default Scroll;
