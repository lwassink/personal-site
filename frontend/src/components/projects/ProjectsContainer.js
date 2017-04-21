import { connect } from 'react-redux';
import Projects from './Projects';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = ({ projects }) => ({
  projects: projects.ids.map(id => projects.allProjects[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
