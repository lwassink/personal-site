import React from 'react';
import NavBar from '../NavBar';
import ProjectItem from './ProjectItem';
import CopyrightBar from '../CopyrightBar';

class Projects extends React.Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  componentWillUnmount() {
    const {openId, firstId, toggleOpen} = this.props;
    if (openId && openId != firstId) toggleOpen(firstId);
  }

  render() {
    const { projects }  = this.props;
    return (
      <div>
        <NavBar />
        <div className="center projects">
          <ul>
            {projects.map((project) => <ProjectItem
              key={project.id}
              toggleOpen={this.props.toggleOpen}
              open={this.props.openId === project.id}
              project={project} />)}
          </ul>
        </div>
        <CopyrightBar />
      </div>
    );
  }
}

export default Projects;
