import React, {Component} from 'react';
import share from './share-icon-white.png'
//import image from './Japan.jpg';
import './RestaurantItem.css'
import FB from 'fb';
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
  componentDidMount(){
    console.log('componentDidMount')
    let stars = document.getElementById(this.props.id).childNodes;
    console.log(stars)

    let rating = this.props.star;
    console.log(rating)
    stars.forEach( (e) => {
      console.log(e);
      let yellow = e.getAttribute('data-rating');
      if (yellow <= parseInt(rating)) {
        e.classList.remove('fa-star-0')
        e.classList.add('fa-star')
      }
    })
  }
  render() {
    return (
      <div className="col-sm-3 item">
        <div className="col-sm-12">
          <div id="image">
            <a href={"/" + this.props.id}>
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

export default RestaurantItem;
