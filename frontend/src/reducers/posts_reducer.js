import { RECEIVE_POSTS } from '../actions/post_actions';

const _defaultState = { names: [], allPosts: {} };

export default function(state = _defaultState, action) {
  Object.freeze(state)
  switch (action.type) {
  case RECEIVE_POSTS:
    return action.posts;
  default:
    return state;
  }
}
