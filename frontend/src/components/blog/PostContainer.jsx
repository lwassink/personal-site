import { connect } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../../actions/post_actions';

const _defaultPost = { title: "", body: "", created_at: "1/1/1" }

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts.allPosts[ownProps.match.params.postId] || _defaultPost
});

const mapDispatchToProps =(dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
