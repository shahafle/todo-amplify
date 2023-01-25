import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify';
//JS
import { store } from './store';
import config from './aws-exports.js'
//SCSS
import './assets/styles/main.scss'
//CMPS
import App from './App';
import { HashRouter } from 'react-router-dom';

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
