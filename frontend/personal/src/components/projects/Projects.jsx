import React from 'react';
import NavBar from '../NavBar';
import ProjectItem from './ProjectItem';

export default ({ projects }) => (
  <div>
    <NavBar />
    <div className="center projects">
      <ul>
        {projects.map(project => <ProjectItem
          key={project.id}
          project={project} />)}
      </ul>
    </div>
  </div>
);
