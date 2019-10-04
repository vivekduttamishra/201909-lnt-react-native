import {NOTE_ADD,NOTE_EDIT,NOTE_DELETE,NOTE_SAVE,NOTE_SELECT} from './action-types';

export const noteAdd=()=>({
        type:NOTE_ADD
});

export const noteSelect=(note)=>({
    type:NOTE_SELECT,
    note:note
});

export const noteEdit=()=>({
    type:NOTE_EDIT,
});

export const noteDelete=(id)=>({
    type:NOTE_DELETE,
    id
});

export const noteSave=(id,editedNote)=>({
    type:NOTE_SAVE,
    editedNote,
    id
});


