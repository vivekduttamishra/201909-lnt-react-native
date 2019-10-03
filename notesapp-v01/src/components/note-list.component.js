import React from 'react';

const _component=(props)=>{

    let list= props.notes.map(note=>(
        <li key={note.id}
        className='list-group-item list-group-item-action'
        onClick={()=>props.onNoteSelect(note)} >{note.title}</li>
    ));

    return (
        <div className='note-list'>
            <ul className='list-group'>
                {list}                
            </ul>
        </div>
    );

};


export default _component;


