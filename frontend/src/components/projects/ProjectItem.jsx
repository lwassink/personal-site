import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open,
      phase: null
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    if (this.state.open)
      this.setState({
        height: document.getElementById(this.props.project.id).offsetHeight
      });
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
      }), 20);
      break;
    case "finishingOpen":
      window.setTimeout(() => this.setState({
        phase: null,
        open: true
      }), 600);
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
    this.setState({ phase: "measuring" });
  }

  close() {
    this.setState({ phase: "closing" });
  }

  toggleOpen() {
    if (this.state.open) { this.close(); }
    else { this.open(); }
  }

  render() {
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

    return (
      <li className="index-item">
        <h1 onClick={this.toggleOpen} >
          <i className={"fa fa-chevron-right " + rotateClass}
          aria-hidden="true"></i>
          {project.title}
        </h1>
        <main>
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
