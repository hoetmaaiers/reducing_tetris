import _ from 'lodash';
import {MOVE_BLOCK} from './../actions';

const initialState = [
  {
    id: 1,
    type: '2',
    pattern: [
      [1, 0],
      [1, 0],
      [1, 1],
      [0, 0],
    ],
    x: 0,
    y: 0,
  },
  {
    id: 2,
    type: '2',
    pattern: [
      [1, 1],
      [1, 1],
    ],
    x: 5,
    y: 9,
  },
];

export default function players(state = initialState, action = {}) {
  switch (action.type) {
    case MOVE_BLOCK:
      let movingBlock = state.find((block) => block.id === action.id);
      console.log(action.direction);
      switch (action.direction) {
        case 'left':
          movingBlock.x -= 1;
          break;
        case 'right':
          movingBlock.x += 1;
          break;
        case 'up':
          movingBlock.y -= 1;
          break;
        case 'down':
          movingBlock.y += 1;
          break;
      }

      return state.map((block) => {
        if (block.id === movingBlock.id) {
          return movingBlock;
        }
        return block;
      });
    default:
      return state;
  }
}
