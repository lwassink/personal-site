import Link from 'react-router-dom/Link';
import React from 'react';
import { proccessDate } from '../../util/util';

export default ({ to, post }) => (
  <Link
    className="header"
    to={to}>
    <h1>
      <i className="fa fa-chevron-right " aria-hidden="true"></i>
      <span>{post.title}</span>
    </h1>
    <span className="date">{proccessDate(post.created_at)}</span>
  </Link>
);
