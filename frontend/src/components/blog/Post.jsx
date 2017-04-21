import React from 'react';
import { proccessDate } from '../../util/util';
import Renderer from './renderer/Renderer';
import withRouter from 'react-router-dom/withRouter';
import BlogNavBarContainer from './BlogNavBarContainer';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  stripFold(string) {
    const foldIndex = string.indexOf("===FOLD===");
    const foldLength = "===FOLD===".length;
    if (foldIndex === -1) return string;
    return string.substring(0, foldIndex)
      + string.substring(foldIndex + foldLength).trim();
  }

  handleHeaderClick() {
    this.props.history.push("/posts");
  };

  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <header onClick={this.handleHeaderClick}>
          <h1>
            <i className="fa fa-chevron-right " aria-hidden="true"></i>
            {post.title}
          </h1>
          <span>{proccessDate(post.created_at)}</span>
        </header>
        <section>
          <Renderer text={this.stripFold(post.body)} />
        </section>
        <BlogNavBarContainer />
      </div>
    );
  }
};

export default withRouter(Post);
