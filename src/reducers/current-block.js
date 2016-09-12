import {ADD_BLOCK} from './../actions'

export default function currentBlock(state = 0, action = {}) {

  switch (action.type) {
    case ADD_BLOCK:
      return action.block.id;

    default:
      return state;
  }
};