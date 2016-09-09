import _ from 'lodash';

export function getBlockCoords(block) {
  const {x, y} = block;

  const coords = block.pattern.map((row, i) => {
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
