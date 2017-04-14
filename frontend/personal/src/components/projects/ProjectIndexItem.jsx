import React from 'react';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { project } = this.props;
    const openClass = this.state.open ? "open" : "";

    return (
      <li className="index-item">
        <h1 onClick={this.toggleOpen} >
          <i className={"fa fa-chevron-right " + openClass}
          aria-hidden="true"></i>
          {project.title}
        </h1>
        <section className={openClass} >
          <p>
            <label>live site:</label>
            <a href={project.live_url}>{project.live_url}</a>
            <label>github:</label>
            <a href={project.github_url}>{project.github_url}</a>
          </p>
          <p> {project.description} </p>
          <p>
            <label>technologies used:</label> {project.technologies}
          </p>
        </section>
      </li>
    );
  }
}

export default ProjectIndexItem;
