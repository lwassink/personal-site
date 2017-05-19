import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router-dom/withRouter';
import Logo from './Logo';

const NavBar = ({ history }) => {
  const linkHome = () => history.push("/")
  return (
    <div className="nav-bar">
      <section className='center'>
        <Logo src="/" onClick={linkHome} />
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </section>
    </div>
  );
}

export default withRouter(NavBar);
