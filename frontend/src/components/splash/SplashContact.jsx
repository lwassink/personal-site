import React from 'react';
import {
  GithubTag,
  EmailTag,
  LinkedinTag
} from '../tags/IconTags';

export default () => (
  <div className="splash-section splash-contact">
    <ul>
      <li>
        <GithubTag />
      </li>
      <li>
        <EmailTag />
      </li>
      <li>
        <LinkedinTag />
      </li>
    </ul>
  </div>
);
