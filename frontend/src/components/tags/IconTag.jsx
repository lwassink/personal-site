import React from 'react';

export default ({ imagePath, url, alt, text }) => {
  const HEIGHT = 50;
  const linkStyles = {
    width: HEIGHT,
    height: HEIGHT,
    display: 'inline-block',
  };
  const imageStyles = {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: 0,
    display: 'inline-block',
    margin: 0
  };

  return (
    <a style={linkStyles} href={url} target="blank" className="tooltip">
      <span className="tooltiptext">{text}</span>
      <img style={imageStyles} alt={alt} src={imagePath} />
    </a>
  );
};
