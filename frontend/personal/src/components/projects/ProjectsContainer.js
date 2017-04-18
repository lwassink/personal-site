import { connect } from 'react-redux';
import Projects from './Projects';

const mapStateToProps = state => ({
  projects: Object.keys(state.projects).map(key => state.projects[key])
});

export default connect(
  mapStateToProps
)(Projects);
