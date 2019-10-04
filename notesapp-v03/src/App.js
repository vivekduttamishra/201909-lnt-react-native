import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';
import AppMargin from './components/app-margin.component';
import NoteView from './components/note-view.component';
import NoteEditor from './components/note-edit.component';
import {getAllNotes} from './store/actions/action-creators';

class App extends React.Component {

  componentDidMount=()=>{
    this.props.getAllNotes();
  }

  render = () => {
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

}


export default connect(null, {getAllNotes})(App);
