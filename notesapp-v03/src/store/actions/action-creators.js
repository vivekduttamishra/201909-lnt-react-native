import {NOTE_ADD,NOTE_EDIT,NOTE_DELETE,NOTE_SAVE,NOTE_SELECT,NOTE_FETCHED} from './action-types';
import Note from '../../model/note';

export const getAllNotes=()=>{

    return {
        type:NOTE_FETCHED,
        notes:[
            new Note('First Note','This is the First Note','notes, test'),
            new Note('Get Data From Server','Its time we get data from server','todo, project'),
            new Note('Move To React Native','We need to crate react-native app','todo, project'),
            new Note('Publish App','App should be published to both appstore and playstore','vision')
        ]
    }
};


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


