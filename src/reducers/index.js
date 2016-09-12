import {combineReducers} from 'redux';

import blocks from './blocks';


const rootReducer = combineReducers({
  rows: () => 20,
  cols: () => 10,
  blocks,
  currentBlock: (id) => id || 2,
})

export default rootReducer;


/**
 * State idea
 *
 * const stateIdea = {
 *   rows: 100,
 *   cols: 20,
 *   blocks: [
 *     {
 *       type: '2',
 *       pattern: [
 *         [1, 0],
 *         [1, 0],
 *         [1, 1],
 *       ],
 *       x: 0,
 *       y: 0,
 *       id: 12
 *     },
 *   ],
 *   currentBlock: 2,
 *   // stashedBlock: 99
 * }
 *
 */
