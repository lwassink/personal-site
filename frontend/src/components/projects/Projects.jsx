import React from 'react';
import NavBar from '../NavBar';
import ProjectItem from './ProjectItem';
import CopyrightBar from '../CopyrightBar';

class Projects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
    if (this.props.openId) this.scroll();
  }

  scroll() {
    const openProj = document.getElementById(`project-${this.props.openId}`);
    const openTop = openProj.getBoundingClientRect().top;
    const bodyTop = document.body.getBoundingClientRect().top;
    const absolute = openTop - bodyTop + 30;
    window.scrollTo(0, absolute);
  }

  componentWillUnmount() {
    const {openId, firstId, openProject} = this.props;
    if (!openId) openProject(firstId);
  }

  render() {
    const { projects }  = this.props;
    return (
      <div>
        <div className="projects main">
          <ul>
            {projects.map((project) => <ProjectItem
              key={project.id}
              toggleOpen={this.props.toggleOpen}
              open={this.props.openId === project.id}
              project={project} />)}
          </ul>
        </div>
        <CopyrightBar fixed={true} />
      </div>
    );
  }
}

export default Projects;
