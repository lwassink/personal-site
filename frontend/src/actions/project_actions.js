import { requestProjects } from '../util/api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const fetchProjects = () => (dispatch) => {
  return requestProjects().then(
    res => res.json().then(projects => dispatch(receiveProjects(projects)))
  )
};
