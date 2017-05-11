import { connect } from 'react-redux';
import Projects from './Projects';
import {
  fetchProjects,
  toggleOpenProject
} from '../../actions/project_actions';

const mapStateToProps = ({ projects }) => ({
  projects: projects.ids.map(id => projects.allProjects[id]),
  openId: projects.open
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  open: (id) => dispatch(toggleOpenProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
