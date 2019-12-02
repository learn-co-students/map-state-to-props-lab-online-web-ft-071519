import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Import createStore to have the template store with getState and dispatch function.
import {createStore} from 'redux'
// Import Provider in order to provide App with store functionality.
import {Provider} from 'react-redux'
// Import manageUsers reducer from reducers folder.
import manageUsers from './reducers/manageUsers'

// Pass manageUsers reducer to the createStore function. Assign it to "store".
const store = createStore(manageUsers)


ReactDOM.render(
    // Wrap App with Provider and create props of "store" to be "provided" to App.
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
