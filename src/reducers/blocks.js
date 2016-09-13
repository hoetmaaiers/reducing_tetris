import _ from 'lodash';
import {fromJS} from 'immutable';
import {ADD_BLOCK, UPDATE_BLOCK} from './../actions';

const initialState = [];

export default function blocks(mutableState = initialState, action = {}) {
  const state = fromJS(mutableState);

  switch (action.type) {
    case ADD_BLOCK:
      return state.concat(action.block).toJS();

    case UPDATE_BLOCK:
      return state.map((block) => {
        if (block.get('id') === action.block.id) {
          return fromJS(action.block);
        } else {
          return block;
        }
      }).toJS();

    default:
      return state.toJS();
  }
}
