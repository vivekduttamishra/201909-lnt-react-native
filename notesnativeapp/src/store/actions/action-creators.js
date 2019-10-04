import { NOTE_ADD, NOTE_EDIT, NOTE_DELETE, NOTE_SAVE, NOTE_SELECT, NOTE_FETCHED,NOTE_LIST_MODE } from './action-types';
import Note from '../../model/note';
import noteApi from '../../model/note-api';

export const getAllNotes = () => {

    let action = {
        type: NOTE_FETCHED,
        payload: noteApi.getAllNotes()
    }
    console.log('getAllNotes() action creator returns action ', action);
    return action;
};


export const noteAdd = () => ({
    type: NOTE_ADD
});

export const noteSelect = (note) => ({
    type: NOTE_SELECT,
    note: note
});

export const listMode=()=>{
    return {
        type:NOTE_LIST_MODE
    }
}

export const noteEdit = () => ({
    type: NOTE_EDIT,
});

export const noteDelete = (id) => {
    let promise = noteApi.deleteNote(id);
    return {
        type: NOTE_DELETE,
        payload: promise,
        id
    }
};

export const noteSave = (id, editedNote) => {

    let response = null;
    if (id)
        response = noteApi.updateNote(editedNote);
    else
        response = noteApi.addNote(editedNote);

    return {
        type: NOTE_SAVE,
        payload: response,
        editedNote,
        id
    }
}


