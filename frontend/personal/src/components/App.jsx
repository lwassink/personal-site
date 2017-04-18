import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import { Provider } from 'react-redux';
import React from 'react';
import Splash from './Splash';
import ProjectsContainer from './projects/ProjectsContainer';
import Blog from './blog/Blog';
import AboutMe from './AboutMe';
import Contact from './Contact';

export default ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route path="/posts" component={Blog} />
          <Route path="/projects" component={ProjectsContainer} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Splash} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
)
