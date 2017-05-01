import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import BlogNavBar from './BlogNavBar';

const mapStateToProps = ( state, ownProps) => {
  const { names } = state.posts;
  const { match } = ownProps;
  const name = match.params.postName;
  const pos = names.indexOf(name);

  return {
    isFirst: name === names[names.length - 1],
    isLast: name === names[0],
    next: names[pos - 1],
    prev: names[pos + 1]
  };
};

const BlogNavBarContainer = connect(
  mapStateToProps
)(BlogNavBar);

export default withRouter(BlogNavBarContainer);
