import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/post_actions";
import { fetchProjects } from "../../actions/project_actions";
import Splash from "./Splash";

const mapStateToProps = ({ posts, projects}) => ({
  posts: posts.names.slice(0,3).map(name => posts.allPosts[name]),
  projects: projects.ids.slice(0,3).map(id => projects.allProjects[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
