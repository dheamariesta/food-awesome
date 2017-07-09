import React, {Component} from 'react';

import './Notes.css'

export class Notes extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <span className="col-sm-3">
          About the restaurant
        </span>
        <span className="col-sm-9">
          We are a team of friends working as professors in economics at the University.
          Understanding Cuba could be arduous for visitors.
        </span>
      </div>
    );
  }
}

export default Notes;
