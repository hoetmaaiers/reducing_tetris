import _ from 'lodash';

import {getBlockCoords} from './block';

export function getCanvasOuterCoords(rows, cols) {
  // top
  const topCoords = _.times(cols, (i) => {
    return {x: i, y: -1};
  });

  // bottom
  const bottomCoords = _.times(cols, (i) => {
      return {x: i, y: rows};
  });

  // left
  const leftCoords = _.times(rows, (i) => {
      return {x: -1, y: i};
  });
  
  // right
  const rightCoords = _.times(rows, (i) => {
      return {x: cols, y: i};
  });


  return _.concat([], topCoords, bottomCoords, leftCoords, rightCoords);
}

export function isBlockOutsideCanvas(block, rows, cols) {
  const canvasCoords = getCanvasOuterCoords(rows, cols);
  const blockCoords = getBlockCoords(block);

  return _.some(canvasCoords, (canvasCoord) => {
    return _.some(blockCoords, (blockCoord) => {
      return _.isEqual(blockCoord, canvasCoord);
    });
  });
}