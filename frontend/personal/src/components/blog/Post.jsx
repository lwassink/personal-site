import React from 'react';
import { proccessDate } from '../../util/util';
import Renderer from './Renderer';
import withRouter from 'react-router-dom/withRouter';

const Post = ({ post, history }) => {
  const stripFold = string => {
    const foldIndex = string.indexOf("===FOLD===");
    const foldLength = "===FOLD===".length;
    if (foldIndex === -1) return string;
    return string.substring(0, foldIndex)
      + string.substring(foldIndex + foldLength).trim();
  }

  function handleHeaderClick() {
    history.push("/posts");
  };

  return (
    <div className="post">
      <header onClick={handleHeaderClick}>
        <h1>
          <i className="fa fa-chevron-right " aria-hidden="true"></i>
          {post.title}
        </h1>
        <span>{proccessDate(post.date)}</span>
      </header>
      <section>
        <Renderer text={stripFold(post.body)} />
      </section>
    </div>
  )
};

export default withRouter(Post);
