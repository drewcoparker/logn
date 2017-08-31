import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

// Redux and Router Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Router, Route, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index.js';

// A token is generated from the backend when the user logs in.
// loadState and saveState are methods to save to and retrieve this token to
// local storage. This allows the user to reamin logged in while navigating
// througout the app and even after she leaves closes the browser and returns
// to the page.
import { loadState, saveState } from './localStorage';
const persistedState = loadState();

// Instantiate the store obect with createStore method. The reducers param is
// required. I also pass the login token retreived from locals storage as
// persistedState. Finally, reduxPromise middleware is passed to assist in my
// ajax requests.
const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(
        reduxPromise
    )
)

store.subscribe(() => {
    // console.log(store.getState());
    saveState({
        loginResponse: store.getState().loginResponse
    })
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
