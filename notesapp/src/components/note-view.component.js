import React from 'react';
import {MODE_VIEW} from '../consts';

//const _component=(props)=>{
    //const selectedNote=props.selectedNote;
    //...
//};


//take selectedNote from props
const _component=({selectedNote,onDeleteNote,onEditNote,mode})=>{
    if(!selectedNote || mode!==MODE_VIEW)
        return(<div/>);

    //come here only when you have a selected Note    
    return (
        <div className='container note-view'>
            <h1>{selectedNote.title}</h1>            
            <button className='btn btn-sm btn-primary' onClick={onEditNote}>
                <i className="fa fa-edit"></i>
                Edit Note
            </button>
            <button className='btn btn-sm btn-danger' onClick={onDeleteNote}>
                <i className="fa fa-trash"></i>
                Delete Note
            </button>
            <div className='note-body'>
                {selectedNote.body}
            </div>
            <div className='note-tags'>
                <strong>filed under:</strong> {selectedNote.tags}
            </div>
        </div>
    );
};

export default _component;


