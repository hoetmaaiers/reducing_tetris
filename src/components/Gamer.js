import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {isBlockColliding, moveBlockCoords, rotateBlock} from './../utils/block';
import {isBlockOutsideCanvas, isBlockOutsideBottomCanvas} from './../utils/canvas';
import {addBlock, updateBlock} from './../actions';

class Gamer extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(addBlock());
    this.tick();

    this.handleKeyEvents();
  }

  tick() {
    const {blocks} = this.props;

    setTimeout(() => {
      this.moveBlock('down');
      this.tick();
    }, 1000);
  }

  handleKeyEvents() {
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

      const action = keyLegend[e.keyCode] || {};

      switch (action.type) {
        case 'move':
          this.moveBlock(action.direction);
          break;
        case 'rotate':
          this.rotateBlock();
          break;
        default:
          // unknown key / action
      }

    });

  }
  
  moveBlock(direction) {
    const {blocks, rows, cols, dispatch} = this.props
    const movingBlock = this.getCurrentBlock();
    const movedBlock = moveBlockCoords(movingBlock, direction);

    const isCollidingOtherBlocks = isBlockColliding(blocks, movedBlock);
    const isOutsideCanvas = isBlockOutsideCanvas(movedBlock, rows, cols);
    const isOutsideBottomCanvas = isBlockOutsideBottomCanvas(movedBlock, rows, cols);
    const isCollidingNextStep = (isCollidingOtherBlocks || isOutsideBottomCanvas);

    if (isCollidingNextStep && (direction === 'down')) {
      dispatch(addBlock());
    } else if (isCollidingNextStep && (direction !== 'down')) {
      // block can't go to next step, do nothing
    } else if (isOutsideCanvas) {
      //  block can't go outside the canvas
    } else {
      dispatch(updateBlock(movedBlock));
    }
  }
  
  rotateBlock() {
    const rotatingBlock = this.getCurrentBlock();
    const rotatedBlock = rotateBlock(rotatingBlock);
    this.props.dispatch(updateBlock(rotatedBlock));
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }

  getCurrentBlock() {
    return _.find(this.props.blocks, {id: this.props.currentBlock});
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Gamer);