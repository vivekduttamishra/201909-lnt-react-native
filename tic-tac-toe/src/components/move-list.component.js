import React from 'react';


const moveList = (props) => {

    let rows = props.moves.map((move, i) => (
        <tr key={i} >
            <td>{i + 1}</td>
            <td>{move.player}</td>
            <td>{move.position}</td>
        </tr>
    ));


    return (

        <div className='container'>
            <h1>Movie List</h1>
            <table className='table table-hover table-stripped'>
                <thead>
                    <tr>
                        <th>Move#</th>
                        <th>Player</th>
                        <th>To </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>

            </table>
        </div>
    );
};

export default moveList;