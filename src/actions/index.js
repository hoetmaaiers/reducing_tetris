export const MOVE_BLOCK = 'MOVE_BLOCK';

export function moveBlock(id, direction) {
  console.log(`let's move block ${id} to the ${direction}`);
  return { type: MOVE_BLOCK, id, direction }
}