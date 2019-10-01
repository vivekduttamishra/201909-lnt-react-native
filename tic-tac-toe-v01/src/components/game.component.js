import React from 'react';
import Board from './board.component';

const styles={
    game:{
        
        width:500
    },
    board:{
        textAlign:'center',
        float:'center',
        marginLeft:'25%',
        width:'50%'
    }
}

export default ()=>(
    <div className='container' style={styles.game}>
        <h1>Tic Tac Toe Game</h1>
        <hr/>
        <h2 className='message'>Start the game</h2>
        <Board style={styles.board} />
    </div>
);