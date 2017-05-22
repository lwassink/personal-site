import { requestProjects } from '../util/api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const TOGGLE_OPEN_PROJECT = 'TOGGLE_OPEN_PROJECT';
export const OPEN_PROJECT = 'OPEN_PROJECT';

const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const toggleOpenProject = (id) => ({
  type: TOGGLE_OPEN_PROJECT,
  id
});

export const openProject = (id) => ({
  type: OPEN_PROJECT,
  id
});

export const fetchProjects = () => (dispatch, getState) => {
  if (getState().projects.fetched) return new Promise(() => {});
  return requestProjects().then(
    res => res.json().then(projects => dispatch(receiveProjects(projects)))
  )
};
