import {combineReducers, Dispatch, createStore} from 'redux';


const ACTION_NOTE_ADD='ACTION_NOTE_ADD';
//action creators ---> functions that define actions that will perform CRUDS on store
function addNote(newNote){
    console.log('add note action creator called',newNote);
    //create a and return an action --> action is not an intent
    return {
        type: ACTION_NOTE_ADD,
        payload:newNote
    }
}
const ACTION_NOTE_DELETE='ACTION_NOTE_DELETE';
function deleteSelectedNote(){
    return {
        type:ACTION_NOTE_DELETE
    }
}
const ACTION_FETCH_BY_ID='ACTION_FETCH_BY_ID';
function getNoteById(id){
    return {
        type:ACTION_FETCH_BY_ID,
        id:id
    }
}

const ACTION_FETCH_ALL='ACTION_FETCH_ALL';
function getAllNotes(){
    return {
        type:ACTION_FETCH_ALL        
    }
}

//Reducers ---> Reducers take actions and update store
//Every action will be sent to each reducer
//weather they need or not
//each reducer gets current store and an action
//may choose to update the store or return it unchanged
// you must return current object or updated object
//you must not update and return currentStore

let intialStore={
    notes:[],
    selectedNote:null,
    lastId:0
}

function addNotesHandler(currentStore=intialStore,action){
    console.log('addNotesHandler called with',currentStore,action);
    switch(action.type){
        case ACTION_NOTE_ADD:
            let lastId=currentStore.lastId;
            let note=action.payload;
            note.id=++lastId;
            let notes=currentStore.notes.concat(note);
            return {...currentStore, notes,lastId};
        default:
            return currentStore;
    }
    
}

function selectNotesHandler(currentStore=intialStore,action){
    console.log('selectNotesHandler called with',currentStore,action);
    return currentStore;
}

function fetchAllNotesHandler(currentStore=intialStore,action){
    console.log('selectNotesHandler called with',currentStore,action);
    

    return currentStore;
}

function fetchSingleNoteHandler(currentStore=intialStore,action){
    console.log('selectNotesHandler called with',currentStore,action);
    console.log('addNotesHandler called with',currentStore,action);
    switch(action.type){
        case ACTION_FETCH_BY_ID:
            let selectedNote= currentStore.notes.find(n=>n.id===action.id);
            return selectedNote;
        default:
            return currentStore;
    }
    
}



//------------- configuring the store

// you need to connect your reducers into redux
//actions need not be configured. they can be dispatched later

let reducers=combineReducers({
    notes:addNotesHandler,
    selectedNote:selectNotesHandler
});

let store=createStore(reducers);

console.log('store',store);

addNote({note:'simple note'});

store.dispatch(addNote({text:'dispatched note 1'}));
store.dispatch(addNote({text:'dispatched note 2'}));
store.dispatch(addNote({text:'dispatched note 3'}));
store.dispatch(addNote({text:'dispatched note 4'}));
console.log('state',store.getState());

store.dispatch(getNoteById( 3 ));
console.log('state',store.getState());