import {combineReducers} from 'redux';
import blocks from './blocks';
import currentBlock from './current-block';


const rootReducer = combineReducers({
  rows: () => 20,
  cols: () => 10,
  blocks,
  currentBlock,
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
 *       id: 'd0466070-7970-11e6-a122-ff715fef9c2d'
 *       type: 'A',
 *       rotation: 3,
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
