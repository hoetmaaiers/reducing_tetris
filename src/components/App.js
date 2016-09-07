import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import TetrisGrid from './TetrisGrid';
import { moveBlock } from './../actions';

class App extends Component {
  constructor(props) {
    console.log('inside <App />');
    super(props);

    this.state = {
      step: 1
    };

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      const keyLegend = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
      };

      // const step = 1;
      const direction = keyLegend[e.keyCode];

      this.props.dispatch(moveBlock(this.props.currentBlock, direction));
    });


  }

  render() {
    console.log(this.props);

    const {rows, cols, blocks} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Tetris</h2>
        </div>

        <TetrisGrid rows={rows} cols={cols} blocks={blocks}>
          {/*<Block step={this.state.step} left="5" top="4"></Block>*/}
        </TetrisGrid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);