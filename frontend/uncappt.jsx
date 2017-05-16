import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {signout} from './actions/session_actions';

window.signout = signout;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
