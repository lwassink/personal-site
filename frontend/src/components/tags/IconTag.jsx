import React from 'react';

export default ({ imagePath, url, alt }) => {
  const HEIGHT = 50;
  const linkStyles = {
    width: HEIGHT,
    height: HEIGHT,
    display: 'inline-block',
    background: "#4c84eb",
    padding: 5,
    borderRadius: 5,
  };
  const imageStyles = {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: 0,
    display: 'inline-block',
    margin: 0
  };

  return (
    <a style={linkStyles} href={url} target="blank">
      <img style={imageStyles} alt={alt} src={imagePath} />
    </a>
  );
};
