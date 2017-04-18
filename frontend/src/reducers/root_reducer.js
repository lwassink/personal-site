import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  posts: postsReducer
});

export default rootReducer;
