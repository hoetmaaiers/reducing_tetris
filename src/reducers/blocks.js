import _ from 'lodash';
import {fromJS, toJS, List, Map} from 'immutable';
import {MOVE_BLOCK} from './../actions';
import {getBlockCoords, isBlockColliding} from './../utils/block';

const initialState = [
  {
    id: 1,
    pattern: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    x: 1,
    y: 1,
  },
  {
    id: 2,
    pattern: [
      [1, 1],
      [1, 1],
    ],
    x: 3,
    y: 6,
  },
  {
    id: 3,
    pattern: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    x: 4,
    y: 0,
  },
  {
    id: 4,
    pattern: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    x: 5,
    y: 10,
  },
  {
    id: 5,
    pattern: [
      [1],
      [1],
      [1],
      [1],
    ],
    x: 2,
    y: 10,
  },
]

export default function blocks(mutableState = initialState, action = {}) {
  const state = fromJS(mutableState);

  switch (action.type) {
    case MOVE_BLOCK:
      const movingBlock = state.find((block) => block.get('id') === action.blockId);
      const movedBlock = moveBlock(movingBlock, action.direction);
      const isColliding = isBlockColliding(state.toJS(), movedBlock.toJS());

      if (isColliding) {
        console.log('this SHIT is colliding, this means currentBlock will become unaviallable for next tick');
        return state.toJS();
      } else {
        return state.map((block) => {
          if (block.get('id') === movedBlock.get('id')) {
            return movedBlock;
          } else {
            return block;
          }
        }).toJS();
      }
      break;

    default:
      return state.toJS();
  }
}

function moveBlock(block, direction) {
  switch (direction) {
    case 'left':
      return block.set('x', block.get('x') - 1);
      break;
    case 'right':
      return block.set('x', block.get('x') + 1);
      break;
    case 'up':
      return block.set('y', block.get('y') - 1);
      break;
    case 'down':
      return block.set('y', block.get('y') + 1);
      break;
  }

}