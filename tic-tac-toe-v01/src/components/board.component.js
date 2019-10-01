import React from 'react';
import Cell from './cell.component';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cells: [null, null, null, null, null, null, null, null, null],
            next: 'O'
        };
    }

    handleCellClicked = (id) => {
        let cellValue = this.state.cells[id];
        if (cellValue)
            return; //don't change non-empty cell

        let newValue = this.state.next;
        let next = newValue == 'O' ? 'X' : 'O';

        //this.state.cells[id]=newValue; //state elements are always immutable
        //you must replace the entire array with a new array
        let cells = [... this.state.cells];
        cells[id] = newValue;

        //update the state
        this.setState({ cells, next }); //update state with new values cells and next

    };

    render = () => (
        <div className='container'>
            <h2>Next Move: {this.state.next} </h2>
            <div >
                <div className='row'>
                    <Cell value={this.state.cells[0]} id={0} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[1]} id={1} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[2]} id={2} cellClicked={this.handleCellClicked} />
                </div>

                <div className='row'>
                    <Cell value={this.state.cells[3]} id={3} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[4]} id={4} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[5]} id={5} cellClicked={this.handleCellClicked} />
                </div>

                <div className='row'>
                    <Cell value={this.state.cells[6]} id={6} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[7]} id={7} cellClicked={this.handleCellClicked} />
                    <Cell value={this.state.cells[8]} id={8} cellClicked={this.handleCellClicked} />
                </div>
            </div>
        </div>
    );

}