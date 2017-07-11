import React, {Component} from 'react';

import './Reviews.css'

export class Reviews extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="review">
        <span className="col-sm-3">
          Sample Reviews id={this.props.id}
        </span>
        <span className="col-sm-9">
          The restaurant was really good and the food was really nice.
        </span>
      </div>
    );
  }
}

export default Reviews;
