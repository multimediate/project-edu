import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// import { Scholarships } from '../api/scholarships.js';

import Scholarship from '../components/scholarship.jsx';

export default class Scholarships extends Component {
  getScholarships() {
    return [
      { _id: 1, text: 'This is scholarship 1' },
      { _id: 2, text: 'This is scholarship 2' },
      { _id: 3, text: 'This is scholarship 3' },
    ];
  }
 
  renderScholarships() {
    return this.getScholarships().map((scholarship) => (
      <Scholarship key={scholarship._id} task={scholarship} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Scholarships</h1>
        </header>
 
        <ul>
          {this.renderScholarships()}
        </ul>
      </div>
    );
  }
}