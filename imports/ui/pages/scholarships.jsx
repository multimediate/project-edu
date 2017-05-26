import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// import { Scholarships } from '../api/scholarships.js';
import Scholarship from '../components/scholarship.jsx'

export default class Scholarships extends Component {
  getScholarships() {
    return [
      { _id: 1, description: 'This is scholarship 1', header: 'Title 1' },
      { _id: 2, description: 'This is scholarship 2', header: 'Title 2' },
      { _id: 3, description: 'This is scholarship 3', header: 'Title 3' },
    ];
  }
 
  renderScholarships() {
    return this.getScholarships().map((scholarship) => (
      <Scholarship key={scholarship._id} scholarship={scholarship} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Scholarships</h1>
        </header>
        <div className="">
          {this.renderScholarships()}
        </div>
      </div>
    );
  }
}