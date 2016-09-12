import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import './App.css';
import TetrisGrid from './TetrisGrid';
import {moveBlock, rotateBlock} from './../actions';

class App extends Component {
  constructor(props) {
    super(props);

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const keyLegend = {
        32: {type: 'rotate'},
        37: {type: 'move', direction: 'left'},
        38: {type: 'move', direction: 'up'},
        39: {type: 'move', direction: 'right'},
        40: {type: 'move', direction: 'down'},
      };

      const action = keyLegend[e.keyCode];

      if (_.isUndefined(action)) return false;

      switch (action.type) {
        case 'move':
          this.props.dispatch(moveBlock(this.props.currentBlock, action.direction));
          break;
        case 'rotate':
          this.props.dispatch(rotateBlock(this.props.currentBlock));
          break;
      }

    });

    // this.tick();
  }

  tick() {
    setTimeout(() => {
      this.props.dispatch(moveBlock(this.props.currentBlock, 'down'));
      this.tick();
    }, 1000);
  }

  render() {
    const {rows, cols, blocks} = this.props;
    const currentBlock = _.find(blocks, {id: this.props.currentBlock})

    return (
      <div className="App">
        <TetrisGrid rows={rows} cols={cols} blocks={blocks} currentBlock={currentBlock}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);