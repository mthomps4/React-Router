import React, { Component } from 'react';
import Router from 'react-router';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';


class Home extends Component {
  handleSubmit(e){
    e.preventDefault();
    let teacherName = e.target.elements[0].value;
    let teacherTopic = e.target.elements[1].value;
    let path = `/featured/${teacherTopic}/${teacherName}`;
    this.context.router.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Featured Teacher</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="Topic"/>
        <button type="submit">Go!</button>
      </form>

      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
