import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      phase: null
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  isMeasuring() {
    return this.state.phase === "measuring";
  }

  componentDidUpdate() {
    switch (this.state.phase) {
    case null:
      break;
    case "measuring":
      window.setTimeout(() => this.setState({
        height: document.getElementById(this.props.project.id).offsetHeight,
        phase: "startingOpen"
      }), 0);
      break;
    case "startingOpen":
      window.setTimeout(() => this.setState({
        phase: "finishingOpen"
      }), 0);
      break;
    case "finishingOpen":
      window.setTimeout(() => this.setState({
        phase: null,
        open: true
      }), 501);
      break;
    case "closing":
      window.setTimeout(() => this.setState({
        phase: null,
        open: false
      }), 0);
      break;
    }
  }

  open() {
    console.log("Opening...")
    this.setState({ phase: "measuring" });
  }

  close() {
    console.log("Closing...")
    this.setState({ phase: "closing" });
  }

  toggleOpen() {
    if (this.state.open) { this.close(); }
    else { this.open(); }
  }

  render() {
    console.log(this.state);
    const { project } = this.props;
    const rotateClass = (this.state.phase === "finishingOpen" || this.state.open) ? "rotate" : "";
    const measureClass = this.isMeasuring() ? "measure" : "";

    let height;
    if (this.state.phase === "finishingOpen" ||
       this.state.phase === "closing") {
     height = this.state.height;
    } else if (this.isMeasuring() || this.state.open) {
      height = "auto";
    } else {
      height = 0;
    }
    const sectionStyle = { height };

    console.log("Height: " + height);

    return (
      <li className="index-item">
        <h1 onClick={this.toggleOpen} >
          <i className={"fa fa-chevron-right " + rotateClass}
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
          <span>
            <label>live site:</label>
            <a href={project.site_url}>{project.site_url}</a>
          </span>
          <span>
            <label>github:</label>
            <a href={project.github_url}>{project.github_url}</a>
          </span>
        </p>
      </li>
    );
  }
}

export default ProjectItem;
