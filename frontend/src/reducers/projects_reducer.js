import {
  RECEIVE_PROJECTS,
  TOGGLE_OPEN_PROJECT,
} from '../actions/project_actions';

const _defaultState = { ids: [], allProjects: {}, open: null };

export default function(state = _defaultState, action) {
  Object.freeze(state)
  switch (action.type) {
  case RECEIVE_PROJECTS:
    return Object.assign({}, action.projects, { open: action.projects.ids[0] });
  case TOGGLE_OPEN_PROJECT:
    let newState = Object.assign({}, state);
    newState.open = (action.id === state.open ? null : action.id);
    return newState;
  default:
    return state;
  }
}
