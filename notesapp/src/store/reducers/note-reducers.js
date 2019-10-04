import {NOTE_ADD,NOTE_EDIT,NOTE_DELETE,NOTE_SAVE,NOTE_SELECT,NOTE_FETCHED} from '../actions/action-types';
import {MODE_EDIT,MODE_NEW,MODE_VIEW} from '../../consts';
import Note from '../../model/note';


export const allNotesReducer=(allNotes=[], action)=>{
    switch(action.type){       
            
        case NOTE_FETCHED:
            console.log('NOTE_FETCHED reducer got ',action);
            return action.payload;
        case NOTE_DELETE:
            return allNotes.filter(n=>n.id!==action.id);
        case NOTE_SAVE:
            let notes=[... allNotes];
            let editedNote=action.editedNote;
            if (!action.id )
                return notes.concat(new Note(editedNote.title,editedNote.body,editedNote.tags));
            else //saving an edited note
                for(let i=0;i<notes.length;i++){
                    if (notes[i].id===action.id){
                        notes[i]=editedNote                        
                    }
                }
            return notes;
        default:
            return allNotes;
    }
}

export const selectedNoteReducer=(selectedNote=null,action)=>{
    switch(action.type){
        case NOTE_FETCHED:
            let notes=action.notes;
            if (notes && notes.length>0)
                return notes[0];
            else
                return selectedNote;

        case NOTE_ADD:
            return {title:'',body:'',tags:''};
        case NOTE_SELECT:                
            return {...action.note}
        default:
            return selectedNote;
    }
}

export const modeReducer=(currentMode=MODE_VIEW, action)=>{
    switch(action.type){
        case NOTE_FETCHED:
            
            let notes=action.notes;
            if(notes && notes.length>0)
                return MODE_VIEW;
            else
                return MODE_NEW;
                
        case NOTE_SELECT:
            return MODE_VIEW;
        case NOTE_EDIT:
            return MODE_EDIT;
        case NOTE_ADD:
            return MODE_NEW;
        default:
            return currentMode;
    }
}