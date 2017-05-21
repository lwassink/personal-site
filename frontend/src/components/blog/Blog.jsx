import React from 'react';
import Route from 'react-router-dom/Route';
import NavBar from '../NavBar';
import PostIndexContainer from './PostIndexContainer';
import PostContainer from './PostContainer';
import CopyrightBar from '../CopyrightBar';

export default () => (
  <div>
    <NavBar />
    <div className="blog main">
      <Route exact={true} path="/posts" component={PostIndexContainer} />
      <Route path="/posts/:postName" component={PostContainer} />
    </div>
    <CopyrightBar />
  </div>
)
