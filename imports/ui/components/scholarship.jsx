import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'bootstrap';
 
// Scholarship component - represents a single scholarship item
export default class Scholarship extends Component {
  render() {
    return (
	  	<Grid>
			<Row>
				<Col xs={12} md={8}>
					<div className="">
						<img src="/images/wireframe/image.png" />
					</div>
					<div className="">
						<a className="">{this.props.scholarship.header}</a>
						<div className="">
							<span>{this.props.scholarship.description}</span>
						</div>
						<div className="">
							<p>{this.props.scholarship.description}</p>
						</div>
						<div className="">
							Additional Details
						</div>
					</div>
				</Col>
			</Row>
		</Grid>
    );
  }
}
 
Scholarship.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  scholarship: PropTypes.object.isRequired,
};

    // 	<div className="">
				// <div className="">
				// 	<img src="/images/wireframe/image.png" />
				// </div>
				// <div className="">
				// 	<a className="">{this.props.scholarship.header}</a>
				// 	<div className="">
				// 		<span>{this.props.scholarship.description}</span>
				// 	</div>
				// 	<div className="">
				// 		<p>{this.props.scholarship.description}</p>
				// 	</div>
				// 	<div className="extra">
				// 		Additional Details
				// 	</div>
				// </div>
		  // </div>