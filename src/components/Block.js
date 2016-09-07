import React, { Component } from 'react';

class Block extends Component {
  // constructor(...rest) {
  //   super(rest);
  // }

  render() {
    const sx = {
      width: '20px',
      height: '20px',
      position: 'absolute',
      left: this.props.step * this.props.left,
      top: this.props.step * this.props.top,
      backgroundColor: 'tomato',
    };

    return (
      <div style={sx}></div>
    )
  }
}

Block.proptypes = {
  step: React.PropTypes.number,
  left: React.PropTypes.number,
  top: React.PropTypes.number,
}

Block.defaultProps = {
  step: 20,
  left: 1,
  top: 1,
}

export default Block;