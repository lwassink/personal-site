import React from 'react';

const ORANGE = '#ff6606';
const DARK_ORANGE = '#e65800';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const size = 30;
    const logoStyles = {
      width: size,
      minWidth: size,
      height: size,
      minHeight: size,
      borderRadius: size/2,
      backgroundColor: ORANGE,
      cursor: 'pointer',
      position: 'relative',
      display: 'inline-block'
    };
    const lStyles = {
      width: 'auto',
      height: 'auto',
      fontSize: 22,
      color: 'white',
      fontWeight: 700,
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: 'auto',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      margin: 0,
      padding: 0,
      border: 0,
      background: 'transparent',
      textDecoration: 'none'
    };

    return (
      <div style={logoStyles}
        onClick={this.props.onClick}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className='logo'>
        <a href={this.props.src}
          onClick={e => (e.preventDefault())}
          style={lStyles}>
          L
        </a>
      </div>
    )
  }
};

export default Logo;
