import _ from 'lodash';
import uuid from 'uuid';

// action constants
export const ROTATE_BLOCK = 'ROTATE_BLOCK';
export const ADD_BLOCK = 'ADD_BLOCK';
export const UPDATE_BLOCK = 'UPDATE_BLOCK';

export function updateBlock(block) {
  return {type: UPDATE_BLOCK, block};
  // return {type: MOVE_BLOCK, blockId: currentBlockId, direction};
}

export function rotateBlock(blockId) {
  return {type: ROTATE_BLOCK, blockId: blockId};
}

export function addBlock() {
  const types = ['A', 'B', 'C', 'D', 'E'];
  const block = createBlock(_.sample(types))
  return {type: ADD_BLOCK, block}
}

function createBlock(type) {
  return {
    // TODO: use a uuid generator for the id property
    id: uuid.v1(),
    type,
    rotation: 0,
    x: 1,
    y: 1,
  }
}
