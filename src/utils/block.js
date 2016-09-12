import _ from 'lodash';
import blockDefinitions from './../constants/blocks';

export function getBlockCoords(block) {
  const {x, y, type, rotation} = block;
  const blockType = blockDefinitions[type.toUpperCase()];
  const pattern = _.find(blockType, { rotation: rotation }).pattern;

  const coords = pattern.map((row, i) => {
    return _.chain(row)
      .map((rowItem, j) => {
        if (rowItem === 1) {
          return {
            x: x + j,
            y: y + i,
          };
        } else {
          return null;
        }
      })
      .compact()
      .value();
  });

  return _.flatten(coords);
}

export function areCollidingBlocks(x, y) {
  const coordsX = getBlockCoords(x);
  const coordsY = getBlockCoords(y);

  let anyCollidingCells = _.some(coordsX, (coordX) => {
    return _.some(coordsY, (coordY) => {
      return _.isEqual(coordX, coordY);
    })
  });

  return anyCollidingCells;
}

export function isBlockColliding(blocks, movingBlock) {
  return _.some(blocks, (block) => {
    if (block.id === movingBlock.id) {
      return false;
    }

    return areCollidingBlocks(block, movingBlock);
  });
}

export function moveBlockCoords(block, direction) {
  switch (direction) {
    case 'left':
      return Object.assign({}, block, {x: block.x - 1});
      break;
    case 'right':
      return Object.assign({}, block, {x: block.x + 1});
      break;
    case 'up':
      return Object.assign({}, block, {y: block.y - 1});
      break;
    case 'down':
      return Object.assign({}, block, {y: block.y + 1});
      break;
  }
}
