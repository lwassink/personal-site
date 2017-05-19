import React from 'react';
import IconTag from '../tags/IconTag';

export default () => (
  <div className="splash-section splash-contact">
    <h2>Contact</h2>

    <ul>
      <li>
        <IconTag
          imagePath='/assets/images/github-icon.svg'
          alt='Github icon'
          url='https://github.com/lwassink' />
      </li>
      <li>
        <IconTag
          imagePath='/assets/images/linkedin-icon.png'
          alt='Linkedin icon'
          url='https://www.linkedin.com/in/lwassink/' />
      </li>
      <li className="last">
        <IconTag
          imagePath='/assets/images/email-icon.png'
          alt='Email icon'
          url='mailto:lwassink@gmail.com' />
      </li>
    </ul>
  </div>
);
