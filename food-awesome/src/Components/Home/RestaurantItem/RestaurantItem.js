import React, {Component} from 'react';

import {connect} from 'react-redux';
import share from './share-icon-white.png'
import './RestaurantItem.css'
import {
  Link
} from 'react-router-dom';


class RestaurantItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    // console.log('componentDidMount')
    let stars = document.getElementById(this.props.id).childNodes;

    let rating = this.props.star;
    stars.forEach( (e) => {
      let yellow = e.getAttribute('data-rating');
      if (yellow <= parseInt(rating)) {
        e.classList.remove('fa-star-o')
        e.classList.add('fa-star')
      }
    })
  }
  onClick = (e) => {
    this.props.onClick(this.props._id, this.props)
  }

  //{"/individual/" + this.props.name}

  render() {
    return (
      <div className="col-sm-3 item" onClick = {this.onClick}>
        <div className="col-sm-12 restaurant-box">
          <Link to={'/individual/' + this.props.name}>
            <div id="image">
              <img src={this.props.img} className="restaurant-image" />
            </div>
          </Link>
          {/*<img src=share id="share-button" className="hover"/>*/}

          <h4>{this.props.name}</h4>
          <div className="star-rating" id={this.props.id}>
            <span className="fa fa-star-o star" data-rating="1"></span>
            <span className="fa fa-star-o star" data-rating="2"></span>
            <span className="fa fa-star-o star" data-rating="3"></span>
            <span className="fa fa-star-o star" data-rating="4"></span>
            <span className="fa fa-star-o star" data-rating="5"></span>
          </div>
          <span>{this.props.description}</span>

        </div>
      </div>
    );
  }
}

export default RestaurantItem;
