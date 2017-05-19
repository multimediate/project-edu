import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
  render() {
    return(
      <div>
        <div className="ui text menu">
          <div className="item">
            <img src="/images/new-school.jpg" />
          </div>
          <a className="browse item">
            Browse Courses
            <i className="dropdown icon"></i>
          </a>
          <div className="ui right dropdown item">
            More
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Applications</div>
              <div className="item">International Students</div>
              <div className="item">Scholarships</div>
            </div>
          </div>
        </div>
        <div className="ui flowing basic admission popup">
          <div className="ui three column relaxed divided grid">
            <div className="column">
              <h4 className="ui header">Business</h4>
              <div className="ui link list">
                <a className="item">Design &amp; Urban Ecologies</a>
                <a className="item">Fashion Design</a>
                <a className="item">Fine Art</a>
                <a className="item">Strategic Design</a>
              </div>
            </div>
            <div className="column">
              <h4 className="ui header">Liberal Arts</h4>
              <div className="ui link list">
                <a className="item">Anthropology</a>
                <a className="item">Economics</a>
                <a className="item">Media Studies</a>
                <a className="item">Philosophy</a>
              </div>
            </div>
            <div className="column">
              <h4 className="ui header">Social Sciences</h4>
              <div className="ui link list">
                <a className="item">Food Studies</a>
                <a className="item">Journalism</a>
                <a className="item">Non Profit Management</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}