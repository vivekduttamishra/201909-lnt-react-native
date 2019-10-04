import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';  
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import noteStore from './store/reducers/index';


//Provider is a ReactComponent created to interact with Redux
//It takes Redux store as its own state

let store=noteStore(); //now we have a redux store

//Now Provider is the root element in my application
//Provider pulls the redux store as its own state
//since root component has a state
//it can be used by all child component

let ReduxApp=()=>(
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(<ReduxApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
