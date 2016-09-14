import _ from 'lodash';

import {getBlockCoords} from './block';

export function canvasOuterTopCoords(rows, cols) {
  return _.times(cols, i => ({x: i, y: -1}));
}

export function canvasOuterBottomCoords(rows, cols) {
  return _.times(cols, i => ({x: i, y: rows}));
}

export function canvasOuterLeftCoords(rows, cols) {
  return _.times(rows, i => ({x: -1, y: i}));
}

export function canvasOuterRightCoords(rows, cols) {
  return _.times(rows, i => ({x: cols, y: i}));
}

export function getCanvasOuterCoords(rows, cols) {
  return _.concat([],
    canvasOuterTopCoords(rows, cols),
    canvasOuterBottomCoords(rows, cols),
    canvasOuterLeftCoords(rows, cols),
    canvasOuterRightCoords(rows, cols),
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

export function isBlockOutsideBottomCanvas(block, rows, cols) {
  const canvasCoords = canvasOuterBottomCoords(rows, cols);
  const blockCoords = getBlockCoords(block);

  return _.some(canvasCoords, (canvasCoord) => {
    return _.some(blockCoords, (blockCoord) => {
      return _.isEqual(blockCoord, canvasCoord);
    });
  });
}