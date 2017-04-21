import { requestPosts } from '../util/api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => (dispatch) => {
  return requestPosts().then(
    res => res.json().then(posts => dispatch(receivePosts(posts)))
  )
};
