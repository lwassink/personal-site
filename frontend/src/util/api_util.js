export const requestPosts = () => fetch('http://localhost:8000/api/posts', {mode: 'cors'});

export const requestProjects = () => fetch('http://localhost:8000/api/projects', {mode: 'cors'});
