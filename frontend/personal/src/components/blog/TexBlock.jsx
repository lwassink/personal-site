import React from 'react';
import katex from 'katex';

class TexBlock extends React.Component {
  componentDidMount() {
    katex.render(this.props.content,
      this.el,
      { display: true });
  }

  render() {
    if (this.props.display) {
      return <p className="tex group" ref={el => { this.el = el; }}/>;
    } else {
      return <span className="tex" ref={el => { this.el = el; }}/>;
    }
  }
}

export default TexBlock;
