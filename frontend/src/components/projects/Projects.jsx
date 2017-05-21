import React from 'react';
import NavBar from '../NavBar';
import ProjectItem from './ProjectItem';
import CopyrightBar from '../CopyrightBar';

class Projects extends React.Component {
  componentWillMount() {
    this.props.fetchProjects();
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
