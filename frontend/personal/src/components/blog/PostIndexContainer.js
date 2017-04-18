import { connect } from 'react-redux';
import PostIndex from './PostIndex';

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key]),
});

export default connect(
  mapStateToProps
)(PostIndex);
