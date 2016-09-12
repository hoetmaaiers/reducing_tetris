/**
 *  XX
 *  XX
 */

export const A = [{
  rotation: 0,
  pattern: [
    [1, 1],
    [1, 1],
  ]
}];


/**
 *  XX
 *  X
 *  X
 */
export const B = [
  {
    rotation: 0,
    pattern: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
  }, {
    rotation: 1,
    pattern: [
      [1, 1, 1],
      [1, 0, 0],
      [0, 0, 0],
    ],
  }, {
    rotation: 2,
    pattern: [
      [0, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
  }, {
    rotation: 3,
    pattern: [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
  }
];

/**
 *
 *   X
 *  XXX
 */
export const C = [
  {
    rotation: 0,
    pattern: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
  }, {
    rotation: 1,
    pattern: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  }, {
    rotation: 2,
    pattern: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
  }, {
    rotation: 3,
    pattern: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],
  }
];

/**
 *
 *   XX
 *  XX
 */
export const D = [
  {
    rotation: 0,
    pattern: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
  }, {
    rotation: 1,
    pattern: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
  }, {
    rotation: 2,
    pattern: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
  }, {
    rotation: 3,
    pattern: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  }
];

/**
 *  X
 *  X
 *  X
 *  X
 */

export const E = [{
  rotation: 0,
  pattern: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ]
}, {
  rotation: 1,
  pattern: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
}];

const blockDefinitions = {
  A, B, C, D, E
};
export default blockDefinitions;