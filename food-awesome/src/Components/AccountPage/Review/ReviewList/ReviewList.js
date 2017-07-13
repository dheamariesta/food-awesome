import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewListView from '../ReviewListView/ReviewListView';


class ReviewList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   activeRestaurant:""
    // }
  }

  renderReviews = () => {
    let reviewArray = this.props.reviews;
    if(reviewArray.length===0){
      return (<div>Loading Reviews</div>)
    }
    return reviewArray.map( (review,index) => {
      return (
          <ReviewListView review={review} key={review._id}/>
      )
    })
  }

  render() {
    return (
      <div className="row reviewListContainer">
        <div className="col-md-12" id="search">
          <input className="form-control" type="text" placeholder="Search"/>
        </div>
        <div className="col-md-12 list-group" id="reviewListViewContainer">
          {this.renderReviews()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.userReview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewList);
