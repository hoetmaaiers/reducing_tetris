import _ from 'lodash';
import blockDefinitions from '../constants/blocks/index';

export function getBlockCoords(block) {
  const {x, y, type, rotation} = block;
  const blockType = blockDefinitions[type.toUpperCase()];
  const pattern = _.find(blockType, {rotation: rotation}).pattern;

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

  return _.some(coordsX, (coordX) => {
    return _.some(coordsY, (coordY) => {
      return _.isEqual(coordX, coordY);
    })
  });
}

export function isBlockColliding(allBlocks, movingBlock) {
  return _.some(allBlocks, (block) => {
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
    case 'right':
      return Object.assign({}, block, {x: block.x + 1});
    case 'up':
      return Object.assign({}, block, {y: block.y - 1});
    case 'down':
      return Object.assign({}, block, {y: block.y + 1});
    default:
      return block;
  }
}

export function rotateBlock(block) {
  const rotationLoops = blockDefinitions[block.type].length;
  const nextRotation = (block.rotation + 1 >= rotationLoops) ? 0 : block.rotation + 1;
  return Object.assign({}, block, {
    rotation: nextRotation,
  });
}