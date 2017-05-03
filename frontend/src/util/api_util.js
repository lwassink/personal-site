const domain = 'http://localhost:8000';

export const requestPosts = () => fetch(`/api/posts`, {mode: 'cors'});

export const requestProjects = () => fetch(`/api/projects`, {mode: 'cors'});
