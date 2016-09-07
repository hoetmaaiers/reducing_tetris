import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    console.log('click', rest);
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
};

export default Button;
