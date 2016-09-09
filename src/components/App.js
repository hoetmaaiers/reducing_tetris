import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import TetrisGrid from './TetrisGrid';
import { moveBlock } from './../actions';

class App extends Component {
  constructor(props) {
    super(props);

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const keyLegend = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
      };

      const direction = keyLegend[e.keyCode];

      this.props.dispatch(moveBlock(this.props.blocks, this.props.currentBlock, direction));
    });

    this.tick();
  }

  tick() {
    setTimeout(() => {
      console.log('move block down');
      this.props.dispatch(moveBlock(this.props.blocks, this.props.currentBlock, 'down'));
      this.tick();
    }, 1000);
  }

  render() {
    const {rows, cols, blocks} = this.props;
    const currentBlock = _.find(blocks, {id: this.props.currentBlock})

    return (
      <div className="App">
        <TetrisGrid rows={rows} cols={cols} blocks={blocks} currentBlock={currentBlock} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);