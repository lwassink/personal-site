import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import React from 'react';
import Splash from './Splash';
import Projects from './projects/Projects';
import Blog from './blog/Blog';
import AboutMe from './AboutMe';
import Contact from './Contact';

export default () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Splash} />
      </Switch>
    </div>
  </BrowserRouter>
)
