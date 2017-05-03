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
            {projects.map((project, idx) => <ProjectItem
              key={project.id}
              open={idx === 0}
              project={project} />)}
          </ul>
        </div>
        <CopyrightBar />
      </div>
    );
  }
}

export default Projects;
