import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

function friends(state = [], action) {
    if (action.type === 'GET_FRIENDS') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(friends);

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch({type: 'GET_FRIENDS', payload: 'sdrfgsdf'});
store.dispatch({type: 'GET_FRIENDS', payload: '12345sdf'});

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
