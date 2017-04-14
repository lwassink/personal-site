import React from 'react';
import NavBar from '../NavBar';
import ProjectIndexItem from './ProjectIndexItem';

class Projects extends React.Component {
  render() {
    const projects = [
      {
        title: "Reversi",
        description: "Play against another player or an AI player.",
        github_url: "https://github.com/",
        live_url: "google.com",
        technologies: "ruby, rails, react, redux",
        id: 1
      },
      {
        title: "Reversi",
        description: "Lorum ipsum dolor sit amet.",
        github_url: "https://github.com/",
        live_url: "google.com",
        technologies: "rails, ruby, akka, redux, scala",
        id: 2
      }
    ]

    return (
      <div>
        <NavBar />
        <div className="center projects">
          <ul>
            {projects.map(project => <ProjectIndexItem
              key={project.id}
              project={project} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
