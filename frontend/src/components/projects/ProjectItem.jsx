import React from 'react';
import { Collapse } from 'react-collapse';
import AnimateHeight from 'react-animate-height';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { project } = this.props;
    const rotateClass = this.state.open ? "rotate" : "";
    const height = this.state.open ? "auto" : 0;

    return (
      <li className="index-item">
        <h1 onClick={this.toggleOpen} >
          <i className={"fa fa-chevron-right " + rotateClass}
          aria-hidden="true"></i>
          <span>{project.title}</span>
        </h1>
        <main>
          <AnimateHeight
            duration={ 500 }
            height={ height }
            easing="ease-in-out" >
            <p> {project.description} </p>
            <p>
              <label>technologies used:</label> {project.technologies}
            </p>
          </AnimateHeight>
          <p>
            {project.site_url ?<span>
              <label>live site:</label>
              <a target="_blank" href={project.site_url}>{project.short_site_url}</a>
            </span> : null}
            {project.github_url ? <span>
              <label>github:</label>
              <a target="_blank" href={project.github_url}>{project.short_github_url}</a>
            </span> : null}
          </p>
        </main>
      </li>
    );
  }
}

export default ProjectItem;
