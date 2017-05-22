import React from 'react';

export default ({ imagePath, url, alt, text }) => {
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
