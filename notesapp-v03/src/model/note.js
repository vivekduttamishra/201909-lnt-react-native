
let lastId=0;

export default class Note{
    constructor(title, body, tags){
        this.id=++lastId;
        this.title=title;
        this.body=body;
        this.tags=tags;
    }
}