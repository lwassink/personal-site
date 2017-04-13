import React from 'react';
import NavLink from 'react-router-dom/NavLink';

export default () => (
  <div className="nav-bar">
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/about-me">About Me</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>
)
