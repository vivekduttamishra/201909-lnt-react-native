import React from 'react';

const styles = {

    cell: {
        padding: '2px',
        borderRadius: 0,
        width: 50,
        height: 50,
        border: '1px solid black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: '2em'
    }

}

export default (props) => (
    <button style={styles.cell} onClick={() => props.onCellClicked(props.id)}  >
        {props.value}
    </button>
);
