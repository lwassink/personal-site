import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import SplashContainer from './splash/SplashContainer';
import ProjectsContainer from './projects/ProjectsContainer';
import Blog from './blog/Blog';
import AboutMe from './AboutMe';

export default ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/posts" component={Blog} />
          <Route path="/projects" component={ProjectsContainer} />
          <Route path="/about-me" component={AboutMe} />
          <Route component={SplashContainer} />
        <Switch/>
      </div>
    </Provider>
  </BrowserRouter>
)
