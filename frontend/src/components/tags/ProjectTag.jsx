import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openProject } from '../../actions/project_actions';

const ProjectTag = ({ project, openProject, history, external }) => {
  const { title, img } = project;

  const HEIGHT = 200;
  const linkStyles = {
    width: HEIGHT,
    height: HEIGHT,
    display: 'inline-block'
  };
  const imageStyles = {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: 0,
    display: 'inline-block',
    margin: 0
  };

  const handleClick = e => {
    e.preventDefault();
    openProject();
    history.push('/projects');
  }

  return (
    <a style={linkStyles}
    href="/projects"
    onClick={handleClick}>
      <img
      style={imageStyles}
      alt={title}
      src={`/assets/images/${img}`} />
    </a>
  );
};

const mapDispatchToProps = (dispatch, { project }) => ({
  openProject: () => dispatch(openProject(project.id))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(ProjectTag));
