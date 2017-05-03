const domain = 'http://lukewassink.com';

export const requestPosts = () => fetch(domain + '/api/posts', {mode: 'cors'});

export const requestProjects = () => fetch(domain + '/api/projects', {mode: 'cors'});
