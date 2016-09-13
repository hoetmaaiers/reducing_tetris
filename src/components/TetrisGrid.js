import React, {Component} from 'react';
import reactCSS from 'reactcss';
import _ from 'lodash';

import TetrisCell from './TetrisCell';
import {getBlockCoords} from './../utils/block';

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
    cell: {
      width: '25px',
      height: '25px',
      backgroundColor: 'white',
      border: '1px solid black',
    },
  },
});


class TetrisGrid extends Component {

  isOccupied(row, col) {
    const {blocks} = this.props;

    const blockCoords = _.flatten(blocks.map(block => getBlockCoords(block)));

    return _.some(blockCoords, (coord) => {
      return coord.x === col && coord.y === row;
    })
  }


  isCurrent(row, col) {
    const {currentBlock} = this.props;
    if (_.isEmpty(currentBlock)) return false;

    const blockCoords = getBlockCoords(currentBlock);

    return _.some(blockCoords, (coord) => {
      return coord.x === col && coord.y === row;
    })
  }

  render() {
    const {cols, rows} = this.props;

    return (
      <div style={sx.gridHolder}>

        {_.times(rows, (row) => {

          return (
            <div key={`row${row}`} style={sx.row}>

              {_.times(cols, (col) => {
                return (
                  <div key={col} style={sx.cell}>
                    <TetrisCell occupied={this.isOccupied(row, col)} current={this.isCurrent(row, col)}/>
                  </div>
                );
              })}

            </div>

          );
        })}

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