export const NOTES_API_URL='http://reduxblog.herokuapp.com/api/posts/';

export const NOTES_API_KEY=123;

export const getNotesApiUrl=(id='')=> `${NOTES_API_URL}${id}?key=${NOTES_API_KEY}`;


