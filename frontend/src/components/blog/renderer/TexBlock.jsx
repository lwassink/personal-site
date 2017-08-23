import React from 'react';
import katex from 'katex';
import { withRouter } from 'react-router-dom';

class TexBlock extends React.Component {
  componentDidMount() {
    this.renderLaTeX(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.content !== newProps.content) this.renderLaTeX(newProps);
  }

  renderLaTeX({ content, display}) {
    katex.render(
      content,
      this.el,
      { displayMode: display }
    );
  }

  render() {
    if (this.props.display)
      return <p className="tex" ref={el => { this.el = el; }}/>;
    return <span className="tex" ref={el => { this.el = el; }}/>;
  }
}

export default TexBlock;
