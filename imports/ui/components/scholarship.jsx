import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single scholarship item
export default class Scholarship extends Component {
  render() {
    return (
      <li>{this.props.scholarship.text}</li>
    );
  }
}
 
Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};