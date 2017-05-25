import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {signout} from './actions/session_actions';
import {requestAllBeer } from './actions/beer_actions';
import {fetchAllCheckins} from './actions/checkin_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
