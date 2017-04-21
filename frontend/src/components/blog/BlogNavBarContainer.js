import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import BlogNavBar from './BlogNavBar';

const mapStateToProps = ( state, ownProps) => {
  const { ids } = state.posts;
  const { match } = ownProps;
  const id = parseInt(match.params.postId);
  const pos = ids.indexOf(id);

  return {
    isFirst: id === ids[ids.length - 1],
    isLast: id === ids[0],
    next: ids[pos - 1],
    prev: ids[pos + 1]
  };
};

const BlogNavBarContainer = connect(
  mapStateToProps
)(BlogNavBar);

export default withRouter(BlogNavBarContainer);
