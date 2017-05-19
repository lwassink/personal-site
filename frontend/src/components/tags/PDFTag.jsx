import React from 'react';

export default ({ label, url }) => {
  const HEIGHT = 30;
  const linkStyles = {
    display: 'inline-block',
    height: HEIGHT,
    verticalAlign: 'middle',
    background: "#4c84eb",
    padding: 5,
    borderRadius: 5,
  };
  const imageStyles = {
    height: HEIGHT,
    borderRadius: 0,
    display: 'inline-block',
    margin: 0,
    width: HEIGHT
  };
  const labelStyles = {
    color: 'black',
    display: 'inline-block',
    left: 0
  };

  return (
    <a style={linkStyles} href={url} target="blank">
      <span style={labelStyles}>{label}</span>
      <img style={imageStyles}
        alt="PDF icon"
        src="/assets/images/pdf-icon.svg" />
    </a>
  );
};
