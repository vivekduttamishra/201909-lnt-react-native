import React from 'react';
import NoteList from './note-list.component';

const _component=(props)=>{
    return (
        <div className='app-margin'>
            
            <NoteList notes={props.notes} onNoteSelect={props.onNoteSelect} />
        </div>
    );
};

export default _component;


