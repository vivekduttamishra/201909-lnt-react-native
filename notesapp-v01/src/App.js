import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';
import AppMargin from './components/app-margin.component';
import NoteView from './components/note-view.component';
import NoteEditor from './components/note-edit.component';
import Note from './model/note';
import {MODE_EDIT,MODE_NEW,MODE_VIEW} from './consts';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        new Note('First Note', 'This is a First Note', 'note,assorted,dummy'),
        new Note('Complete Note App', 'We must complete Note app by adding further details', 'todo, note-app'),
        new Note('Search for a Server', 'We need a server to host the data', 'todo, server-side'),
        new Note('React Routes', 'Routes handle app navigation', 'react, react-lesson'),
        new Note('React Forms', 'React form handle user input in a better way', 'react,react-lessor')
      ],
      selectedNote:{title:'',body:'',tags:''},
      mode: MODE_NEW //possible modes: new, edit, view

    }
  }

  componentDidMount(){
    this.newNote();
  }

  selectNote=(selectedNote)=>{
    //this will add/replace selectedNote 
    //field without actually touching other fields likes notes
    this.setState({selectedNote,mode:MODE_VIEW}) ;
  }

  editNote=()=>{
    this.setState({mode:MODE_EDIT,selectNote:{...this.state.selectedNote}});
    console.log('editing',this.state.selectedNote);
    
  };

  newNote=()=>{
    let selectedNote={title:'',body:'',tags:''};
    let mode=MODE_NEW;
    this.setState({selectedNote,mode});
  }

  deleteNote=()=>{
    
    let notes= this.state.notes.filter(note=>note.id!==this.state.selectedNote.id);
    let selectedNote=null;
    
    let mode=MODE_VIEW;
    if (notes.length===0){
      mode=MODE_NEW
      selectedNote=null;
    } else{
      selectedNote=notes[0];
      mode=MODE_VIEW
    }

    this.setState({notes,selectedNote,mode});
  }

  saveNote=(editedNote)=>{
    console.log('saving',editedNote);
    let mode=MODE_VIEW;
    let notes=this.state.notes;
    let selectedNote=this.state.selectedNote;

    if(this.state.mode===MODE_NEW){
      let newNote=new Note(editedNote.title, editedNote.body,editedNote.tags);
      notes=this.state.notes.concat(newNote);
      selectedNote= newNote;
      

    }else if(this.state.mode==MODE_EDIT){
      //DO NOTHING YET. NOT YET IMPLEMENTED!      
      notes=[...this.state.notes];
      for(let i=0;i<notes.length;i++){
        if (notes[i].id===selectedNote.id){
          notes[i].title=editedNote.id;
          notes[i].body=editedNote.body;
          notes[i].tags=editedNote.tags;
          selectedNote=notes[i]
          break;
        }
          
      }
    }

    this.setState({notes,selectedNote,mode});
  }

  render() {

    

    return (
      <div className='App'>
        <AppHeader title='My Notes'  onNew={this.newNote} />

        <div className='container main-content'>
          <div className='row'>
            <div className='col-md-3'>
              <AppMargin notes={this.state.notes} onNoteSelect={this.selectNote}  />
            </div>
            <div className='col-md-9'>
              <div >
                <NoteEditor mode={this.state.mode} 
                            selectedNote={this.state.selectedNote} 
                            onSave={this.saveNote}
                            />
              </div>
              <div>
                <NoteView mode={this.state.mode} 
                    selectedNote={this.state.selectedNote} 
                    onDeleteNote={this.deleteNote}
                    onEditNote={this.editNote} />
              </div>
            </div>
          </div>

        </div>
        <AppFooter />
      </div>
    );
  }

}
export default App;
