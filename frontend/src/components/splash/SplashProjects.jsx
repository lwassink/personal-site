import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="splash-section splash-projects">
    <h2>Stuff I <span className="orange" >Made</span></h2>
    <Link to="/projects">more projects</Link>
  </div>
);
