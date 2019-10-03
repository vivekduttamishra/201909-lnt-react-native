import React from 'react';
import {connect} from 'react-redux';
import {noteSelect} from '../store/actions/action-creators';

const _component=(props)=>{

    let list= props.notes.map(note=>(
        <li key={note.id}
        className='list-group-item list-group-item-action'
        onClick={()=>props.noteSelect(note)} >{note.title}</li>
    ));

    return (
        <div className='note-list'>
            <ul className='list-group'>
                {list}                
            </ul>
        </div>
    );

};

//takes redux store states as state here
const mapStateToProps=(state)=>{
    return {  //select and return props you need for your component
        notes:state.notes
    }
}


export default connect(mapStateToProps, //list of prop data
    {                                   //list of dispatchable actions (Event Hanlder)
        noteSelect
})(_component); //reduxify react component


