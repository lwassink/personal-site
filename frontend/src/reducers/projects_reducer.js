import {
  RECEIVE_PROJECTS,
  TOGGLE_OPEN_PROJECT,
  OPEN_PROJECT
} from '../actions/project_actions';

const _defaultState = { ids: [], allProjects: {}, open: null, fetched: false };

export default function(state = _defaultState, action) {
  Object.freeze(state)
  let newState

  switch (action.type) {
  case RECEIVE_PROJECTS:
    return Object.assign({}, action.projects, {
      open: action.projects.ids[0],
      fetched: true
    });
  case TOGGLE_OPEN_PROJECT:
    newState = Object.assign({}, state);
    newState.open = (action.id === state.open ? null : action.id);
    return newState;
  case OPEN_PROJECT:
    newState = Object.assign({}, state);
    newState.open = action.id;
    return newState;
  default:
    return state;
  }
}
