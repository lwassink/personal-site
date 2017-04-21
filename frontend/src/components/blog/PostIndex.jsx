import React from 'react';
import PostIndexItem from './PostIndexItem';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <ul className="post-index">
        {posts.map(post => (
          <PostIndexItem post={post} key={post.id} />
        ))}
      </ul>
    );
  }
}

export default PostIndex;
