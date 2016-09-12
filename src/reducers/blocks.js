import {fromJS, toJS, List, Map} from 'immutable';
import blockDefinitions from './../constants/blocks';
import {MOVE_BLOCK, ROTATE_BLOCK} from './../actions';
import {getBlockCoords, isBlockColliding} from './../utils/block';

const initialState = [
  {
    id: 1,
    type: 'A',
    rotation: 0,
    x: 1,
    y: 1,
  },
  {
    id: 2,
    type: 'B',
    rotation: 0,
    x: 3,
    y: 6,
  },
  {
    id: 3,
    type: 'D',
    rotation: 0,
    x: 4,
    y: 0,
  },
  {
    id: 4,
    type: 'C',
    rotation: 0,
    x: 5,
    y: 10,
  },
  {
    id: 5,
    type: 'E',
    rotation: 0,
    x: 0,
    y: 12,
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

    case ROTATE_BLOCK:
      const rotatingBlock = state.find((block) => block.get('id') === action.blockId);
      const rotatedBlock = rotateBlock(rotatingBlock);

      return state.map((block) => {
        if (block.get('id') === rotatedBlock.get('id')) {
          console.log(rotatedBlock.toJS());
          return rotatedBlock;
        } else {
          return block;
        }
      }).toJS();

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

function rotateBlock(block) {
  const rotationLoops = blockDefinitions[block.get('type')].length;
  const nextRotation = (block.get('rotation') + 1 >= rotationLoops) ? 0 : block.get('rotation') + 1;
  return block.set('rotation', nextRotation);
}