import React from 'react';
import {MODE_VIEW} from '../consts';
import {connect} from 'react-redux';
import {noteEdit,noteDelete} from '../store/actions/action-creators';

//const _component=(props)=>{
    //const selectedNote=props.selectedNote;
    //...
//};


//take selectedNote from props
const _component=({selectedNote,noteDelete,noteEdit,mode})=>{
    if(!selectedNote || mode!==MODE_VIEW)
        return(<div/>);

    //come here only when you have a selected Note    
    return (
        <div className='container note-view'>
            <h1>{selectedNote.title}</h1>            
            <button className='btn btn-sm btn-primary' onClick={noteEdit}>
                <i className="fa fa-edit"></i>
                Edit Note
            </button>
            <button className='btn btn-sm btn-danger' onClick={()=>noteDelete(selectedNote.id)}>
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

const mapStateToProps=state=>{
    return {
        selectedNote:state.selectedNote,
        mode:state.mode
    }
}

export default connect(mapStateToProps,{noteEdit,noteDelete})( _component);


