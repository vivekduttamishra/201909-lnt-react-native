import React from 'react';

const _component=(props)=>{
    const note=props.note;
    return (
        <div className='container note-view'>
            <h1>note.title</h1>            
            <div className='note-body'>
                note.body
            </div>
            <div className='note-tags'>
                <strong>filed under:</strong> note-tags
            </div>
        </div>
    );
};

export default _component;


