import React, { Component } from 'react';
import Board from './board.component';



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
    render=()=>(
        <div className='container' style={styles.game}>
            <h2 className='message'>{this.props.message} </h2>
            <Board style={styles.board} 
            cells={this.props.cells} 
            onCellClicked={this.props.onCellClicked} />
        </div>
    );
}