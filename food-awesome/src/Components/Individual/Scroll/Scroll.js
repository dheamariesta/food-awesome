import React, {Component} from 'react';
import RestTitle from './RestTitle/RestTitle';
import MidSect from './MidSect/MidSect';
import Notes from './Notes/Notes';
import Reviews from './Reviews/Reviews';
import AddReview from '../AddReview/AddReview';
import { connect } from 'react-redux';

import './Scroll.css'

export class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isAddReviewOpen: false,
    popUp: false,
}
  }

  closeReviewBox = () => {
    this.setState({ isAddReviewOpen:false })
  }

  reviewBoxOpen = () => {
    let isLoggedIn = false
    if(this.props.user.hasOwnProperty('_id')){
      isLoggedIn = true
    }
    console.log(isLoggedIn)
    if(!isLoggedIn){
      this.setState({
        popUp: true
      })
    }else{
      this.setState({
        isAddReviewOpen: true
      })
    }
  }

  adminMessage = () => {
    return (<div>Please Login to post review</div>)
  }

  render() {
    return (
      <div className="col-sm-7 item">
        <div className="col-sm-12">
          <h4>Scroll</h4>
          <RestTitle name={this.props.restaurant.name}/>
          <MidSect />
          <Reviews />
        </div>
        {
          this.state.popUp? this.adminMessage(): null
        }
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Scroll);
