const NOTES_API_URL = 'http://reduxblog.herokuapp.com/api/posts/';

const NOTES_API_KEY = 'vivek-lnt-react-201910';

const getNotesApiUrl = (id = '') => `${NOTES_API_URL}${id}?key=${NOTES_API_KEY}`;

const mapDataToNote = (data) => {

    let title = data.title ? data.title : 'untitled';
    return {
        id: data.id,
        title: title,
        body: data.content,
        tags: data.categories
    };
};

const getAllNotes = () => {
    let url = getNotesApiUrl();
    return fetch(url)               //Promise<Response>
        .then(response => response.json())  //Promise<Json> ---> from
        .then(response => response.map(mapDataToNote))    //Promise<Notes> ---> in our app format

}

const mapNoteToData = (note) => ({
    id: note.id,
    title: note.title,
    content: note.body,
    categories: note.tags
})

const addNote = (note) => {
    let data = mapNoteToData(note);
    let url=getNotesApiUrl()
    return fetch(url,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header

        });

};

const updateNote = (note) => {
    let data = mapNoteToData(note);
    let url=getNotesApiUrl(data.id);
    return fetch(url,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header

        });
};

const deleteNote = (id) => {
    let url=getNotesApiUrl(id);
    return fetch(url,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors'
        });
};

export default {
    getNotesApiUrl,
    getAllNotes,
    addNote,
    updateNote,
    deleteNote

}

