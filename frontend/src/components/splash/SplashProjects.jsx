import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTag from '../tags/ProjectTag';

export default ({ projects }) => (
  <div className="splash-section splash-projects">
    <h2>Stuff I <span className="orange" >Made</span></h2>

    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <ProjectTag project={project} />
        </li>
      ))}
    </ul>

    <Link to="/projects">more projects</Link>
  </div>
);
