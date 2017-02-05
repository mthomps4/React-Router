import React, {Component} from 'react';
import {Link} from 'react-router';

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <ul className="course-nav">
            <li><Link to="courses/html" activeClassName="active">HTML</Link></li>
            <li><Link to="courses/css" activeClassName="active">CSS</Link></li>
            <li><Link to="courses/javascript" activeClassName="active">JavaScript</Link></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default Courses;
