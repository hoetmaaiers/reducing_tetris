import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {isBlockColliding, moveBlockCoords} from './../utils/block';
import {isBlockOutsideCanvas} from './../utils/canvas';
import {addBlock, updateBlock, rotateBlock} from './../actions';

class Gamer extends Component {
  constructor(props) {
    super(props);

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const keyLegend = {
        32: {type: 'rotate'},
        37: {type: 'move', direction: 'left'},
        38: {type: 'move', direction: 'up'},
        39: {type: 'move', direction: 'right'},
        40: {type: 'move', direction: 'down'},
      };

      const action = keyLegend[e.keyCode];

      if (_.isUndefined(action)) return false;

      switch (action.type) {
        case 'move':
          this.moveBlock(action.direction);
          break;
        case 'rotate':
          this.props.dispatch(rotateBlock(this.props.currentBlock));
          break;
        default:
        // unknown key / action
      }

    });

    this.props.dispatch(addBlock());
    this.tick();
  }

  moveBlock(direction) {
    const movingBlock = _.find(this.props.blocks, {id: this.props.currentBlock});
    const movedBlock = moveBlockCoords(movingBlock, direction);

    const isColliding = isBlockColliding(this.props.blocks, movedBlock);
    const isOutsideCanvas = isBlockOutsideCanvas(movedBlock, this.props.rows, this.props.cols);

    if (isColliding || isOutsideCanvas) {
      console.warn('COLLIDING COLLIDING COLLIDING COLLIDING COLLIDING COLLIDING');
    } else {
      this.props.dispatch(updateBlock(movedBlock));
    }
  }

  tick() {
    setTimeout(() => {
      this.moveBlock('down');
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Gamer);