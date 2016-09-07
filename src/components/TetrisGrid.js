import React, {Component} from 'react';
import reactCSS from 'reactcss';
import _ from 'lodash';

import TetrisCell from './TetrisCell';

const sx = reactCSS({
  default: {
    gridHolder: {
      border: '2px solid black',
      display: 'block',
      float: 'left',
    },
    row: {
      display: 'flex',
      float: 'left',
      clear: 'both',
    },
    col: {
      width: '25px',
      height: '25px',
      backgroundColor: 'white',
      border: '1px solid black',
    },
  },
});


function getBlockCoords(block) {
  const {x, y} = block;

  const coords = block.pattern.map((row, i) => {
    return row.
      filter((rowItem, j) => {
        return (rowItem === 1);
      })
      .map((rowItem, j) => {
        return {x: x +j, y: y + i};
      });
  });

  return _.flatten(coords);
}

class TetrisGrid extends Component {

  isCurrent(row, col) {
    const {blocks} = this.props;
    const blockCoords = _.flatten(blocks.map((block) => {
      return getBlockCoords(block);
    }));

    return _.some(blockCoords, (coord) => {
      return coord.x === col && coord.y === row;
    })
    return true;
  }

  render() {
    const {cols, rows} = this.props;

    return (
      <div>
        <h1>GRID</h1>
        <div style={sx.gridHolder}>

          {_.times(rows, (row) => {

            return (
              <div key={`row${row}`} style={sx.row}>

                {_.times(cols, (col) => {
                  return (
                    <div key={col} style={sx.col}>
                      <TetrisCell current={this.isCurrent(row, col)}/>
                    </div>
                  );
                })}

              </div>

            );
          })}

        </div>

      </div>
    );
  }
}

TetrisGrid.propTypes = {
  cols: React.PropTypes.number,
  rows: React.PropTypes.number,
}

TetrisGrid.defaultProps = {
  cols: 3,
  rows: 9,
}

export default TetrisGrid;