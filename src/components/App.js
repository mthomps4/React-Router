import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/teachers" activeClassName="active">Teachers</Link></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
