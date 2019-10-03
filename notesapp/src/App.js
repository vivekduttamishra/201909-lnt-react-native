import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';

function App() {
  return (
    <div className='App'>
      <AppHeader/>
      <div className='container'>
        This is the Main Body of the Application
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
