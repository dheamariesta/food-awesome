import React, {Component} from 'react';
import RestTitle from './RestTitle/RestTitle';
import MidSect from './MidSect/MidSect';
import Notes from './Notes/Notes';
import Reviews from './Reviews/Reviews';
import AddReview from '../AddReview/AddReview';
import axios from 'axios'
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
    console.log('reviews', this.props.restaurant.reviews)
    axios.get('/review/' + this.props.restaurant._id)
    .then((response) => {
      console.log('response from get review', response);
    })
    .catch((error) => {
      console.log(error);
    });
    return (
      <div className="col-sm-7 scroll-item">
        <div className="col-sm-12">
          <RestTitle name={this.props.restaurant.name}/>
          <MidSect description={this.props.restaurant.describeIndividual}/>
          <Reviews id={this.props.restaurant.reviews}/>
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
