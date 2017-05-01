import React from 'react';
import katex from 'katex';

class TexBlock extends React.Component {
  componentDidMount() {
    katex.render(
      this.props.content,
      this.el,
      { displayMode: this.props.display }
    );
  }

  render() {
    if (this.props.display)
      return <p className="tex" ref={el => { this.el = el; }}/>;
    return <span className="tex" ref={el => { this.el = el; }}/>;
  }
}

export default TexBlock;
