import _ from 'lodash';

import {getBlockCoords} from './block';

export function getCanvasOuterCoords(rows, cols) {

  return _.concat([],
    // top
    _.times(cols, i => ({x: i, y: -1})),
    // bottom
    _.times(cols, i => ({x: i, y: rows})),
    // left
    _.times(rows, i => ({x: -1, y: i})),
    // right
    _.times(rows, i => ({x: cols, y: i})),
  );
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