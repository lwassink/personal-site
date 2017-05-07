import React from 'react';

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
      borderRadius: size/2,
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
      position: 'relative'
    };
    const lStyles = {
      fontSize: 22,
      color: this.state.hover ? 'black' : 'darkgrey',
      fontWeight: 700,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      margin: 0,
      padding: 0
    };

    return (
      <div style={logoStyles}
      onClick={this.props.onClick}
      onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}
      className='logo'>
      <a style={lStyles}>L</a>
    </div>)
  }
};

export default Logo;