import _ from 'lodash';
import {fromJS} from 'immutable';
import blockDefinitions from './../constants/blocks';
import {ROTATE_BLOCK, ADD_BLOCK, UPDATE_BLOCK} from './../actions';

const initialState = [
]

export default function blocks(mutableState = initialState, action = {}) {
  const state = fromJS(mutableState);

  switch (action.type) {
    case ADD_BLOCK:
      return _.concat([], state.toJS(), action.block);

    case UPDATE_BLOCK:
      return state.map((block) => {
        if (block.get('id') === action.block.id) {
          return fromJS(action.block);
        } else {
          return block;
        }
      }).toJS();

    case ROTATE_BLOCK:
      const rotatingBlock = state.find((block) => block.get('id') === action.blockId);
      const rotatedBlock = rotateBlock(rotatingBlock);

      return state.map((block) => {
          if (block.get('id') === rotatedBlock.get('id')) {
            return rotatedBlock;
          } else {
            return block;
          }
      }).toJS();

    default:
      return state.toJS();
  }
}

function rotateBlock(block) {
  const rotationLoops = blockDefinitions[block.get('type')].length;
  const nextRotation = (block.get('rotation') + 1 >= rotationLoops) ? 0 : block.get('rotation') + 1;
  return block.set('rotation', nextRotation);
}