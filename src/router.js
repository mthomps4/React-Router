import React from 'react';
import {Router, Route,  IndexRedirect} from 'react-router';

import { createHistory, useBasename } from "history";
const browserHistory = useBasename(createHistory)({
    basename: "/"
});

// Components
import App from './components/App';
import Home from './components/Home.js';
import About from './components/About.js';
import Courses from './components/Courses.js';
import Teachers from './components/Teachers.js';

import HTML from './components/courses/HTML.js';
import CSS from './components/courses/CSS.js';
import JavaScript from './components/courses/JavaScript.js';

import NotFound from './components/NotFound.js';
import Featured from './components/Featured.js';

// Routes
const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} title="About"/>
        <Route path="teachers" component={Teachers} />
        <Route path="courses" component={Courses}>
          <IndexRedirect to="html"/>
          <Route path="html" component={HTML} />
          <Route path="css" component={CSS} />
          <Route path="javascript" component={JavaScript} />
        </Route>
        <Route path="featured/:topic/:name" component={Featured} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
