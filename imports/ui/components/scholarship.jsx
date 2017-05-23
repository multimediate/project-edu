import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
 
// Scholarship component - represents a single scholarship item
export default class Scholarship extends Component {
  render() {
    return (
    	<div className="item">
				<div className="image">
					<img src="/images/wireframe/image.png" />
				</div>
				<div className="content">
					<a className="header">{this.props.scholarship.header}</a>
					<div className="meta">
						<span>{this.props.scholarship.description}</span>
					</div>
					<div className="description">
						<p>{this.props.scholarship.description}</p>
					</div>
					<div className="extra">
						Additional Details
					</div>
				</div>
		  </div>
    );
  }
}
 
Scholarship.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  scholarship: PropTypes.object.isRequired,
};