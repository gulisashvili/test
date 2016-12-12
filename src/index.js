import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './index.css';
import  { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = { name: 'leva'}, action) => {
  switch (action.type) {
    case 'ON_INIT'
    return Object.assign({}, state, {user : action.payload})

    case 'CHANGE_NAME':
      return Object.assign({}, state, {name : action.payload, age: 18})
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));
