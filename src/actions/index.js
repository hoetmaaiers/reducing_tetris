import {getBlockCoords, areCollidingBlocks} from './../utils/block';

// action constants
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const ROTATE_BLOCK = 'ROTATE_BLOCK';

export function moveBlock(currentBlockId, direction) {
  return {type: MOVE_BLOCK, blockId: currentBlockId, direction};
}

export function rotateBlock(blockId) {
  return {type: ROTATE_BLOCK, blockId: blockId};
}