import React, {Component} from 'react';
import {connect} from 'react-redux';
import share from './share-icon-white.png'
import './RestaurantItem.css'

import { activeHome } from '../../../Actions/Home/activeHome'
//import FB from 'fb';
class RestaurantItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  onClick = () => {
    console.log('share to facebook!')
    // FB.ui(
    //   {
    //     method: 'share',
    //     href: 'https://developers.facebook.com/docs/',
    //   },
    //   // callback
    //   function(response) {
    //     if (response && !response.error_message) {
    //       alert('Posting completed.');
    //     } else {
    //       alert('Error while posting.');
    //     }
    //   }
    // );
  }

  navigate = () => {
    this.props.activeHome(this.props);
  }
  componentDidMount(){
    console.log('componentDidMount')
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
  //{"/individual/" + this.props.name}
  render() {
    return (
      <div className="col-sm-3 item">
        <div className="col-sm-12">
          <div id="image">
            <a href={ "/individual/" + this.props.name} onClick={this.navigate}>
              <img src={this.props.img} className="restaurant-image" />
            </a>
          </div>
          <img src={share} id="share-button" className="hover" onClick={this.onClick}/>

          <h4>{this.props.name}</h4>
          <div className="star-rating" id={this.props.id}>
            <span className="fa fa-star-o star" data-rating="1"></span>
            <span className="fa fa-star-o star" data-rating="2"></span>
            <span className="fa fa-star-o star" data-rating="3"></span>
            <span className="fa fa-star-o star" data-rating="4"></span>
            <span className="fa fa-star-o star" data-rating="5"></span>
            <input type="hidden" name="whatever1" className="rating-value" value="2.56"/>
          </div>
          <span>{this.props.description}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    activeHome: (name) => {dispatch(activeHome(name));}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantItem);
