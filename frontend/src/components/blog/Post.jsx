import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import withRouter from 'react-router-dom/withRouter';
import Renderer from './renderer/Renderer';
import BlogNavBarContainer from './BlogNavBarContainer';
import PostHeader from './PostHeader';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id !== nextProps.post.id) window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.fetchPosts();
    window.scrollTo(0, 0);
  }

  stripFold(string) {
    const foldIndex = string.indexOf("===FOLD===");
    const foldLength = "===FOLD===".length;
    if (foldIndex === -1) return string;
    return string.substring(0, foldIndex)
      + string.substring(foldIndex + foldLength).trim();
  }

  render() {
    const { post } = this.props;
    console.log(post)
    return (
      <div className="post">
        <PostHeader
          post={post}
          to="/posts" />
        <section>
          <Renderer text={this.stripFold(post.body)} />

          <ReactDisqusThread
            shortname={post.url_name}
            identifier={post.url_name}
            title={post.title}
            url="http://www.lukewassink.com"/>
        </section>
        <BlogNavBarContainer />
      </div>
    );
  }
};

export default Post;
