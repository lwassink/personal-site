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
          text='My Gitub'
          url='https://github.com/lwassink' />
      </li>
      <li>
        <IconTag
          imagePath='/assets/images/email-icon.png'
          text='Email me'
          alt='Email icon'
          url='mailto:lwassink@gmail.com' />
      </li>
      <li>
        <IconTag
          imagePath='/assets/images/linkedin-icon.png'
          text='My Linkedin'
          alt='Linkedin icon'
          url='https://www.linkedin.com/in/lwassink/' />
      </li>
    </ul>
  </div>
);
