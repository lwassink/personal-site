import React from 'react';
import Route from 'react-router-dom/Route';
import NavBar from '../NavBar';
import PostIndexContainer from './PostIndexContainer';
import PostContainer from './PostContainer';

export default () => (
  <div>
    <NavBar />
    <div className="blog">
      <Route exact={true} path="/posts" component={PostIndexContainer} />
      <Route path="/posts/:postId" component={PostContainer} />
    </div>
  </div>
)
