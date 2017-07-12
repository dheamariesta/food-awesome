import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Reviews.css'

export class Reviews extends Component {
  // constructor(props) {
  //   super(props);
  // }
  showArrow = () => {
    let isLoggedIn = false
    if(this.props.user.hasOwnProperty('_id')){
      isLoggedIn=true
      return (<div>
        <button>
          <span className="glyphicon glyphicon-menu-up"></span>
        </button>
        <div>vote: {this.props.review.vote}</div>
        <button>
          <span className="glyphicon glyphicon-menu-down"></span>
        </button>
      </div>)
    } else {
      return ""
    }
  }
  componentDidMount(){
    // console.log('componentDidMount')
    let stars = document.getElementById(this.props.review._id).childNodes;

    let rating = this.props.review.star;
    stars.forEach( (e) => {
      let yellow = e.getAttribute('data-rating');
      if (yellow <= parseInt(rating)) {
        e.classList.remove('fa-star-o')
        e.classList.add('fa-star')
      }
    })
  }
  render() {
    return (
      <div className="row review">
        <div className="col-xs-1">
          {this.showArrow()}
        </div>
        <div className="col-xs-3 reviewImage">
          <img src={this.props.review.picReview}/>
        </div>
        <div className="col-xs-5">
          <h4>{this.props.review.title}</h4>
          {this.props.review.description}
        </div>
        <div className="col-xs-3">
          <div className="star-rating" id={this.props.review._id}>
            <span className="fa fa-star-o star" data-rating="1"></span>
            <span className="fa fa-star-o star" data-rating="2"></span>
            <span className="fa fa-star-o star" data-rating="3"></span>
            <span className="fa fa-star-o star" data-rating="4"></span>
            <span className="fa fa-star-o star" data-rating="5"></span>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
