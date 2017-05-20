import { connect } from 'react-redux';
import Projects from './Projects';
import {
  fetchProjects,
  openProject,
  toggleOpenProject
} from '../../actions/project_actions';

const mapStateToProps = ({ projects }) => ({
  projects: projects.ids.map(id => projects.allProjects[id]),
  firstId: projects.ids[0],
  openId: projects.open
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  openProject: (id) => dispatch(openProject(id)),
  toggleOpen: (id) => dispatch(toggleOpenProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
