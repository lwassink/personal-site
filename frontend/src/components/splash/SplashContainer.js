import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/post_actions";
import { fetchProjects } from "../../actions/project_actions";
import Splash from "./Splash";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts),
  fetchProjects: () => dispatch(fetchProjects)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
