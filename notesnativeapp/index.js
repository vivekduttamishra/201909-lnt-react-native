/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import noteStore from './src/store/reducers/index'

let store=noteStore();

let ReduxApp= ()=>(
    <Provider store={store} >
        <App/>
    </Provider>
);


AppRegistry.registerComponent(appName, () => ReduxApp);
