import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import Renderer from './renderer/Renderer';
import PostHeader from './PostHeader';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  splitAtFold(string) {
    const fold = string.indexOf("===FOLD===");
    if (fold === -1) return string;
    return string.substring(0, fold + 1).trim();
  }

  render() {
    const { post } = this.props;

    return (
      <li className="post-index-item">
        <PostHeader
          post={post}
          to={`/posts/${this.props.post.url_name}`} />
        <section>
          <Renderer text={this.splitAtFold(post.body)} />
          <Link to={`/posts/${post.url_name}`}>full post</Link>
        </section>
      </li>
    )
  }
}

export default PostIndexItem;
