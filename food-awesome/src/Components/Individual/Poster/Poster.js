import React, {Component} from 'react';
import Havana from './havana.jpg';
import './Poster.css'

export class Poster extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="col-sm-5 item">
        <div className="col-sm-12">
          <h4>Poster</h4>
          <img src={Havana} className="restaurant-image" />
          <div>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</div>
        </div>
      </div>
    );
  }
}

export default Poster;
