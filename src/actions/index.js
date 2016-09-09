import {getBlockCoords, areCollidingBlocks} from './../utils/block';

// action constants
export const MOVE_BLOCK = 'MOVE_BLOCK';

export function moveBlock(blocks, currentBlockId, direction) {
  console.log('moveBlock', currentBlockId);
  return {type: MOVE_BLOCK, blockId: currentBlockId, direction};
}