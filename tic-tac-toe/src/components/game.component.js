import React, { Component } from 'react';
import Board from './board.component';
import gameRule from '../tick-tac-toe.rule';


const styles = {
    game: {

        width: 500
    },
    board: {
        textAlign: 'center',
        float: 'center',
        marginLeft: '25%',
        width: '50%'
    }
}

export default class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cells: [null, null, null, null, null, null, null, null, null],
            next: 'O',
            message:`First Move: O`
        };
    }

    handleCellClicked = (id) => {

        if(gameRule.isGameOver(this.state.cells))
            return; //game was already over

        let cellValue = this.state.cells[id];
        if (cellValue)
            return; //don't change non-empty cell

        let newValue = this.state.next;
        let next = newValue == 'O' ? 'X' : 'O';

        let cells = [... this.state.cells];
        cells[id] = newValue;

        let winner= gameRule.hasWon(cells);
        let isGameOver=gameRule.isGameOver(cells);

        let message=`Next Move : ${next}`;

        if(winner)
            message=`${winner} Wins!`;
        else if(isGameOver)
            message=`Game Ends a Draw!`;


        this.setState({ cells, next,message }); //update state with new values cells and next

    };

    render=()=>(
        <div className='container' style={styles.game}>
            <h1>Tic Tac Toe Game</h1>
            <hr />
            <h2 className='message'>{this.state.message} </h2>
            <Board style={styles.board} cells={this.state.cells} onCellClicked={this.handleCellClicked} />
        </div>
    );
}