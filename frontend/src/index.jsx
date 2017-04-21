import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './styles/index.scss'
import configureStore from './store/store';
import preloadedState from './store/preloaded_state'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
});
