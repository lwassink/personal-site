import { RECEIVE_PROJECTS } from '../actions/project_actions';

const _defaultState = { ids: [], allProjects: {} };

export default function(state = _defaultState, action) {
  Object.freeze(state)
  switch (action.type) {
  case RECEIVE_PROJECTS:
    return action.projects;
  default:
    return state;
  }
}
