import React from 'react';
import SplashHeader from './SplashHeader';
import SplashProjects from './SplashProjects';
import SplashPosts from './SplashPosts';
import SplashAboutMe from './SplashAboutMe';
import SplashContact from './SplashContact';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="splash">
        <SplashHeader />
        <SplashProjects projects={this.props.projects} />
        <SplashPosts posts={this.props.posts} />
        <SplashAboutMe />
        <SplashContact />
      </div>
    );
  }
}

export default Splash;
