import React, { Component } from 'react';
import './App.css';
import Game from './components/game.component';
import gameRule from './tick-tac-toe.rule';
import MoveList from './components/move-list.component';
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      cells: [null, null, null, null, null, null, null, null, null],
      next: 'O',
      message: `First Move: O`,
      snapshots:[]
    }
    //this.resetGame();
  }

  handleCellClicked = (id) => {

    if (gameRule.isGameOver(this.state.cells))
      return; //game was already over

    let cellValue = this.state.cells[id];
    if (cellValue)
      return; //don't change non-empty cell

    let newValue = this.state.next;
    let next = newValue === 'O' ? 'X' : 'O';

    let cells = [... this.state.cells];
    cells[id] = newValue;

    let winner = gameRule.hasWon(cells);
    let isGameOver = gameRule.isGameOver(cells);

    let message = `Next Move : ${next}`;

    if (winner)
      message = `${winner} Wins!`;
    else if (isGameOver)
      message = `Game Ends a Draw!`;

    let snapshot={
      cells,
      next,
      winner,
      message,
      isGameOver,
      player:newValue,
      position:id
    }

    //push adds value to current list
    //it mutates the list
    //states are immutable
   //let snapshots= this.state.snapshots.push(snapshot);

   //concat creates a new list with current value and newly added value
   //it doesn't mutate list
   //any change in a component state should be generally immutable
    let snapshots=this.state.snapshots.concat(snapshot);

    this.setState({ cells, next, message,snapshots }); //update state with new values cells and next

  };

  resetGame=()=>{
    this.setState ( {
      cells: [null, null, null, null, null, null, null, null, null],
      next: 'O',
      message: `First Move: O`,
      snapshots:[]
    });
  }

  render = () => (
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <button className='btn btn-danger'
        onClick={this.resetGame}
      >Reset</button>
      <hr />
      <div className='row'>
        <div className='col-md-3'>
        <Game message={this.state.message} 
          cells={this.state.cells}
          onCellClicked={this.handleCellClicked}
        />
        </div>
        
        <div className=' container col-md-3' >
          <MoveList  moves={this.state.snapshots} />
        </div>
        
        <div className='col-md-6' >

        </div>
      </div>
    </div>
  )
}

export default App;
