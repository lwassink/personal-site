import React from 'react';
import { Link } from 'react-router-dom';
import { proccessDate } from '../../util/util';

export default ({ posts }) => {
  return (
    <div className="splash-section splash-posts">
      <h2>Stuff I <span className="orange">Wrote</span></h2>
      <ul className="post-links" >
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.url_name}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="post-dates" >
        {posts.map(post => (
          <li key={post.id}>
            - {proccessDate(post.created_at)}
          </li>
        ))}
      </ul>
      <Link className="last" to="/posts">more posts</Link>
    </div>
  );
}
