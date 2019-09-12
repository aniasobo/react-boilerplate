import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // renders the App component into the DOM node targeted by ID.
);
