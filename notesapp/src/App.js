import React from 'react';
import './App.css';
import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';
import AppMargin from './components/app-margin.component';
import NoteView from './components/note-view.component';
import NoteEditor from './components/note-edit.component';

const app = () => {
  return (
    <div className='App'>
      <AppHeader title='My Notes' />
      <div className='container main-content'>
        <div className='row'>
          <div className='col-md-3'>
            <AppMargin />
          </div>
          <div className='col-md-9'>
            <div >
              <NoteEditor />
            </div>
            <div>
              <NoteView />
            </div>
          </div>
        </div>

      </div>
      <AppFooter />
    </div>
  );
};


export default app;
