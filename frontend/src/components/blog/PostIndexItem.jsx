import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import { proccessDate } from '../../util/util';
import Renderer from './renderer/Renderer';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  splitAtFold(string) {
    const fold = string.indexOf("===FOLD===");
    if (fold === -1) return string;
    return string.substring(0, fold).trim();
  }

  handleHeaderClick() {
    this.props.history.push(`/posts/${this.props.post.url_name}`);
  }

  render() {
    const { post } = this.props;

    return (
      <li className="post-index-item">
        <header onClick={this.handleHeaderClick}>
          <h1>
            <i className="fa fa-chevron-right " aria-hidden="true"></i>
            {post.title}
          </h1>
          <span>{proccessDate(post.created_at)}</span>
        </header>
        <section>
          <Renderer text={this.splitAtFold(post.body)} />
          <Link to={`/posts/${post.id}`}>full post</Link>
        </section>
      </li>
    )
  }
}

export default withRouter(PostIndexItem);
