import React from 'react';
import Link from 'react-router-dom/Link';

export default () => (
  <div className="splash">
    <div className="title">
      <h1>Luke Wassink,</h1>
      <h2>full-stack web developer</h2>
    </div>

    <div className="index">
      <Link to="/projects">Projects</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)
