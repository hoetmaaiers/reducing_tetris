import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Gamer from './Gamer';
import TetrisGrid from './TetrisGrid';


class App extends Component {
  render() {
    const {rows, cols, blocks, currentBlock} = this.props;

    return (
      <Gamer>
        <TetrisGrid
          rows={rows}
          cols={cols}
          blocks={blocks}
          currentBlock={currentBlock}
        />
      </Gamer>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state, {
    currentBlock: _.find(state.blocks, {id: state.currentBlock}),
  })
}

export default connect(mapStateToProps)(App);