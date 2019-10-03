import React from 'react';
import Cell from './cell.component';

export default (props) => (
    <div className='container'>
        <div >
            <div className='row'>
                <Cell value={props.cells[0]} id={0} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[1]} id={1} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[2]} id={2} onCellClicked={props.onCellClicked} />
            </div>

            <div className='row'>
                <Cell value={props.cells[3]} id={3} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[4]} id={4} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[5]} id={5} onCellClicked={props.onCellClicked} />
            </div>

            <div className='row'>
                <Cell value={props.cells[6]} id={6} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[7]} id={7} onCellClicked={props.onCellClicked} />
                <Cell value={props.cells[8]} id={8} onCellClicked={props.onCellClicked} />
            </div>
        </div>
    </div>
);
