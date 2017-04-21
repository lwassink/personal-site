import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      measured: false,
      height: "auto"
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    this.setState({
      height: document.getElementById(this.props.project.id).offsetHeight,
      open: false,
      measured: true
    });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { project } = this.props;
    const openClass = this.state.open ? "open" : "";
    const measureClass = this.state.measured ? "" : "measure"
    const sectionStyle = {
      height: (this.state.open || !this.state.measured)
        ? this.state.height : 0
    };

    return (
      <li className="index-item">
        <h1 onClick={this.toggleOpen} >
          <i className={"fa fa-chevron-right " + openClass}
          aria-hidden="true"></i>
          {project.title}
        </h1>
        <section
          style={sectionStyle}
          className={measureClass}
          id={project.id} >
          <p> {project.description} </p>
          <p>
            <label>technologies used:</label> {project.technologies}
          </p>
        </section>
        <p>
          <label>live site:</label>
          <a href={project.site_url}>{project.site_url}</a>
          <label>github:</label>
          <a href={project.github_url}>{project.github_url}</a>
        </p>
      </li>
    );
  }
}

export default ProjectItem;
