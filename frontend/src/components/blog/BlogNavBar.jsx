import React from 'react';
import Link from 'react-router-dom/Link';

export default ({ isFirst, isLast, next, prev }) => (
  <nav className="blog-nav-bar" >
    {isFirst ? <span /> : <Link to={'/posts/' + prev}>previous post</Link>}
    <Link to='/posts'>all posts</Link>
    {isLast ? <span /> : <Link to={'/posts/' + next}>next post</Link>}
  </nav>
);
