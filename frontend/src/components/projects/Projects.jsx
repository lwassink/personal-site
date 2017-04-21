import React from 'react';
import NavBar from '../NavBar';
import ProjectItem from './ProjectItem';
import CopyrightBar from '../CopyrightBar';

class Projects extends React.Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects }  = this.props;
    return (
      <div>
        <NavBar />
        <div className="center projects">
          <ul>
            {projects.map(project => <ProjectItem
              key={project.id}
              project={project} />)}
          </ul>
        </div>
        <CopyrightBar />
      </div>
    );
  }
}

export default Projects;
