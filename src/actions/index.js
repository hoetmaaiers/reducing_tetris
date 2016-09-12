import _ from 'lodash';
import {areCollidingBlocks} from './../utils/block';

// action constants
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const ROTATE_BLOCK = 'ROTATE_BLOCK';
export const ADD_BLOCK = 'ADD_BLOCK';

export function moveBlock(currentBlockId, direction) {
  return {type: MOVE_BLOCK, blockId: currentBlockId, direction};
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
    id: Date.now(),
    type,
    rotation: 0,
    x: 1,
    y: 1,
  }
}
