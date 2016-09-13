import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Gamer from './Gamer';
import TetrisGrid from './TetrisGrid';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {rows, cols, blocks} = this.props;
    const currentBlock = _.find(blocks, {id: this.props.currentBlock})

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
  return state;
}

export default connect(mapStateToProps)(App);