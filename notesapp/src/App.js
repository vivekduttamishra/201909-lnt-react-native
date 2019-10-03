import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';
import AppMargin from './components/app-margin.component';
import NoteView from './components/note-view.component';
import NoteEditor from './components/note-edit.component';

function App() {
  return (
    <div className='App'>
      <AppHeader title='My Notes' />
      
      
      <div className='container main-content'>
        <div className='row'>
          <div className='col-md-3'>
              <AppMargin/>
          </div>
          <div className='col-md-9'>
              
              <NoteEditor/>
              <NoteView/>
          </div>
        </div>
        
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
