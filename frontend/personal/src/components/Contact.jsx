import React from 'react';
import NavBar from './NavBar';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div  className="contact center">
          <h1>Luke Wassink</h1>
          <p><label>phone:</label> 319 330-1706</p>
          <p><label>email:</label>
            <a target="_blank" href="mailto:lwassink@gmail.com">
              lwassink@gmail.com
            </a>
          </p>
          <p><label>linkedin:</label>
            <a target="_blank" href="https://www.linkedin.com/in/lwassink/">
              linkedin.com/in/lwassink
            </a>
          </p>
          <p><label>github:</label>
            <a target="_blank" href="https://github.com/lwassink">
             github.com/lwassink
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Contact;
