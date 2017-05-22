import React from 'react';
import { Collapse } from 'react-collapse';
import AnimateHeight from 'react-animate-height';
import ProjectTag from '../tags/ProjectTag';
import { GithubTag, LiveTag } from '../tags/LabelTags';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.props.toggleOpen(this.props.project.id);
  }

  render() {
    const { project } = this.props;
    const rotateClass = this.props.open ? "rotate" : "";
    const height = this.props.open ? "auto" : 0;

    return (
      <li className="index-item" id={`project-${project.id}`}>
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
            <div className="row">
              <p className="description column column-7">
                {project.description}
              </p>
              <p className="column column-5">
                {project.img ? <ProjectTag project={project} external={true} />
                  : null}
              </p>
            </div>
            <p>
              <label>technologies used:</label> {project.technologies}
            </p>
          </AnimateHeight>
          <p>
            <LiveTag
            label="Live Site"
            url={project.site_url}
            />
            <GithubTag
            label="Github Repo"
            url={project.github_url}
            />
          </p>
        </main>
      </li>
    );
  }
}

export default ProjectItem;
