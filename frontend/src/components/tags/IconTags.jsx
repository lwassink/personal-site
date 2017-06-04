import React from 'react';

const IconTag = ({ imagePath, url, alt, text }) => {
  const HEIGHT = 30;
  const linkStyles = {
    width: HEIGHT,
    height: HEIGHT,
    display: 'inline-block',
    background: '#2367e7',
    padding: 5,
    borderRadius: 5
  };
  const imageStyles = {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: 0,
    display: 'inline-block',
    margin: 0,
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <a style={linkStyles} href={url} target="blank" className="tooltip">
      <span className="tooltiptext">{text}</span>
      <img style={imageStyles} alt={alt} src={imagePath} />
    </a>
  );
};

export const GithubTag = (props) => (
  <IconTag {...props}
    imagePath='/assets/images/github-icon.svg'
    alt='Github icon'
    text='My Gitub'
    url='https://github.com/lwassink' />
);

export const EmailTag = (props) => (
  <IconTag {...props}
    imagePath='/assets/images/email-icon.png'
    text='Email me'
    alt='Email icon'
    url='mailto:lwassink@gmail.com' />
)

export const LinkedinTag = (props) => (
  <IconTag {...props}
    imagePath='/assets/images/linkedin-icon.png'
    text='My Linkedin'
    alt='Linkedin icon'
    url='https://www.linkedin.com/in/lwassink/' />
)
