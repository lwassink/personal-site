import { connect } from 'react-redux';
import PostIndex from './PostIndex';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ({ posts }) => ({
  posts: posts.ids.map(id => posts.allPosts[id]),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
