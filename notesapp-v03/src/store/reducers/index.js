import {combineReducers,createStore} from 'redux';
import {allNotesReducer,selectedNoteReducer,modeReducer} from './note-reducers';

const reducer= combineReducers({    ////this can be treated as state of my compoent
    notes:allNotesReducer,              //notes
    selectedNote:selectedNoteReducer,   //selectedNote 
    mode:modeReducer                    //mode
});

export default ()=>{
    return createStore(reducer);
}

