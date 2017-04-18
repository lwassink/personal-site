import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
})

export default connect(
  mapStateToProps
)(Post);
