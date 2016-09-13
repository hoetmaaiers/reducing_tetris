import _ from 'lodash';
import uuid from 'uuid';

// action constants
export const ADD_BLOCK = 'ADD_BLOCK';
export const UPDATE_BLOCK = 'UPDATE_BLOCK';

export function updateBlock(block) {
  return {type: UPDATE_BLOCK, block};
}

export function addBlock() {
  const types = ['A', 'B', 'C', 'D', 'E'];
  const block = createBlock(_.sample(types))
  return {type: ADD_BLOCK, block}
}

function createBlock(type) {
  return {
    id: uuid.v1(),
    type,
    rotation: 0,
    x: 1,
    y: 1,
  }
}

