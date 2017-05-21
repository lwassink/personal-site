import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router-dom/withRouter';
import Logo from './Logo';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render () {
    const linkHome = () => this.props.history.push("/");
    const navClass = this.state.open ? "nav-bar open" : "nav-bar";

    return (
      <div className={navClass}>
        <section className='center'>
          <section className='hamburger'>
            <i className="fa fa-bars" aria-hidden="true"
              onClick={this.toggleOpen}>
            </i>
            <Logo src="/" onClick={linkHome} />
          </section>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/about-me">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </section>
      </div>
    );
  }
}

export default withRouter(NavBar);
