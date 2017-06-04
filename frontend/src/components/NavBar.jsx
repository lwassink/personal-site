import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router-dom/withRouter';
import Logo from './Logo';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: window.innerWidth
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.checkWidth = this.checkWidth.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWidth);
  }

  checkWidth() {
    if (window.innerWidth > 550 && this.state.width <= 550) this.close();
    this.setState({ width: window.innerWidth });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  close() {
    this.setState({ open: false });
  }

  render () {
    const linkHome = () => this.props.history.push("/");
    const navClass = this.state.open ? "nav-bar open" : "nav-bar";

    return (
      <div className={navClass} tabIndex="0" onBlur={this.close}>
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
        </section>
      </div>
    );
  }
}

export default withRouter(NavBar);
