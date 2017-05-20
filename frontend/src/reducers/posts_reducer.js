import { RECEIVE_POSTS } from '../actions/post_actions';

const _defaultState = { names: [], allPosts: {}, fetched: false };

export default function(state = _defaultState, action) {
  Object.freeze(state)
  switch (action.type) {
  case RECEIVE_POSTS:
    return Object.assign({}, action.posts, { fetched: true });
  default:
    return state;
  }
}
