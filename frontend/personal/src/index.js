import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './styles/index.scss'

document.addEventListener("DOMContentLoaded", () =>
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
);
