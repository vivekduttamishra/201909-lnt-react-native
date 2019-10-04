import React from 'react';
import {connect} from 'react-redux';
import {noteSelect} from '../store/actions/action-creators';

const _component=(props)=>{
    console.log('props in not-list',props);
    console.log('typeof(props.notes)',typeof(props.notes),props.notes);
    
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
    console.log('state in note-list',state);
  
    return {  //select and return props you need for your component
        notes:state.notes
    }
}

const actions={
    noteSelect
}

export default connect(mapStateToProps,  actions)(_component); //reduxify react component


