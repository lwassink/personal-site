const domain = 'http://localhost:8000';

export const requestPosts = () => fetch(`${domain}/api/posts`, {mode: 'cors'});

export const requestProjects = () => fetch(`${domain}/api/projects`, {mode: 'cors'});
