import React from 'react';
import SplashHeader from './SplashHeader';
import SplashProjects from './SplashProjects';
import SplashPosts from './SplashPosts';
import SplashContact from './SplashContact';
import CopyrightBar from '../CopyrightBar';
import NavBar from '../NavBar';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchProjects();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="splash">
        <NavBar />
        <SplashHeader />
        <SplashProjects projects={this.props.projects} />
        <SplashPosts posts={this.props.posts} />
        <SplashContact />
        <CopyrightBar />
      </div>
    );
  }
}

export default Splash;
