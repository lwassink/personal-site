import React from 'react';
import PostIndexItem from './PostIndexItem';

export default ({ posts }) => (
  <ul className="post-index">
    {posts.map(post => (
      <PostIndexItem post={post} key={post.id} />
    ))}
  </ul>
);
