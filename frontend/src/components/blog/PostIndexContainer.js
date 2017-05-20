import { connect } from 'react-redux';
import PostIndex from './PostIndex';
import { fetchPosts } from '../../actions/post_actions';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = ({ posts }) => ({
  posts: posts.names.map(name => posts.allPosts[name]),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
