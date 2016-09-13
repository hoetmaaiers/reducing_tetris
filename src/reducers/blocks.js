import _ from 'lodash';
import {fromJS} from 'immutable';
import {ROTATE_BLOCK, ADD_BLOCK, UPDATE_BLOCK} from './../actions';
import {rotateBlock} from './../utils/block';

const initialState = [];

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
      const rotatedBlock = rotateBlock(rotatingBlock.toJS());

      return state.map((block) => {
          if (block.get('id') === rotatedBlock.id) {
            return rotatedBlock;
          } else {
            return block;
          }
      }).toJS();

    default:
      return state.toJS();
  }
}
