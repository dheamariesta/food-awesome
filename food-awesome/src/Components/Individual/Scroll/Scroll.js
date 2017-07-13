import React, {Component} from 'react';
import RestTitle from './RestTitle/RestTitle';
import MidSect from './MidSect/MidSect';
import Notes from './Notes/Notes';
import Reviews from './Reviews/Reviews';
import AddReview from '../AddReview/AddReview';

import axios from 'axios'
import { connect } from 'react-redux';
import './Scroll.css'

export class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isAddReviewOpen: false,
    popUp: false,
    reviews: this.props.activeHome.reviews
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
    //console.log(isLoggedIn)
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


  renderReviewItem = () => {
    let reviews = this.state.reviews
    //console.log('renderReviewItem')
    return reviews.map((el) => {
      //console.log(el)
      if(!el.hasOwnProperty('description')){
        //console.log('inside if')
        return (<div key={el}>Loading reviews</div>)
      } else {
        //console.log('inside else')
        return <Reviews key={el._id} review={el}/>
      }

    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      reviews: nextProps.activeHome.reviews
    })
  }
  render() {
    //console.log('reviews', this.props.restaurant.reviews)
    console.log('render')
    const renderReview = this.renderReviewItem()
    return (
      <div className="col-sm-7">
        <div className="col-sm-12 scroll-item">
        <div className="restaurant-description">
          <RestTitle name={this.props.restaurant.name}/>
          <MidSect description={this.props.restaurant.describeIndividual}/>
          <div>{renderReview}</div>
        </div>
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
    activeHome: state.activeHome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Scroll);
